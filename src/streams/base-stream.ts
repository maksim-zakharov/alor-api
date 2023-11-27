import {
  MarketSubscription,
  UniversalMarketResponse,
} from "../market-subscription";
import { AlorOpenApiOptions, SubscriptionAction } from "../types";
import { WebSocket, CloseEvent } from "ws";
import { refreshTokenMiddleware } from "../utils";
import { AxiosInstance } from "axios";
import AlorApi from "../api";
// import { refreshTokenMiddleware } from './utils';

export class BaseStream {
  connected = false;
  options = {
    autoReconnect: true,
    autoReconnectDelayMin: 100,
    autoReconnectDelayMax: 2000,
    endpoint: "",
    token: "",
  };
  protected wss: WebSocket;
  protected autoReconnectDelay = 0;
  subscriptions = new Set<MarketSubscription<any, any>>();

  private readonly refresh: any;

  constructor(protected readonly api: AlorApi) {
    this.options = { ...this.options, ...this.api.options };
    this.refresh = this.api.refresh;

    const recreateWS = () => {
      this.wss = new WebSocket(this.api.options.wssEndpoint);
      this.wss.setMaxListeners(100);

      this.wss.onclose = async (error) => {
        this.connected = false;
        await this.onClose(error, recreateWS);
      };
    };

    recreateWS();
  }

  setMaxListeners(listeners: number) {
    this.wss.setMaxListeners(listeners);
  }

  protected async waitEvents() {
    this.connected = true;
    this.wss.emit("open");
  }

  protected calcAutoReconnectDelay() {
    this.autoReconnectDelay =
      this.autoReconnectDelay === 0
        ? this.options.autoReconnectDelayMin
        : Math.min(
            this.autoReconnectDelay * 2,
            this.options.autoReconnectDelayMax,
          );
  }

  protected async onClose(error?: CloseEvent, recreateWS?: any) {
    this.subscriptions.forEach((subscription) =>
      this.wss.off("message", subscription.handler),
    );

    if (!error) {
      return;
    }

    /**
     * Если соединение закрылось ошибочно
     */
    if (!error.wasClean) {
      await this.refresh();
    }

    if (this.options.autoReconnect) {
      if (recreateWS) {
        recreateWS();
      }

      setTimeout(() => this.reconnect(), this.autoReconnectDelay);
      this.calcAutoReconnectDelay();
    }
  }

  /**
   * Установлен ли обработчик.
   */
  hasListener(event: string, handler: any) {
    return this.wss.listeners(event).includes(handler);
  }

  protected sendRequest(req) {
    /**
     * WebSocket is not open: readyState 0 (CONNECTING)
     * На случай если пытаемся послать запрос а сокет еще не открыт
     */
    const interval = setInterval(() => {
      if (this.wss.readyState === WebSocket.OPEN) {
        this.wss.send(JSON.stringify(req));
        clearInterval(interval);
      }
    }, 5);
  }

  protected async connect() {
    if (!this.connected) {
      await this.waitEvents();
    }
  }

  async reconnect() {
    await this.connect();
    for (const subscription of this.subscriptions) {
      await this.watch(subscription, false);
    }
    this.autoReconnectDelay = 0;
  }

  protected async watch(
    subscription: MarketSubscription<any, any>,
    withAuth: boolean = true,
  ) {
    if (!subscription || !(subscription instanceof MarketSubscription)) {
      throw new Error("Subscription not found");
    }

    if (withAuth) await this.connect();

    this.sendRequest(subscription.getRequest());

    if (!this.hasListener("message", subscription.handler)) {
      this.wss.on("message", subscription.handler);
    }
    try {
      await subscription.waitStatus();
    } catch (e) {
      this.wss.off("message", subscription.handler);
      throw e;
    }
    this.subscriptions.add(subscription);
    return () => this.unwatch(subscription);
  }

  protected async unwatch(subscription: MarketSubscription<any, any>) {
    if (!subscription || !(subscription instanceof MarketSubscription)) {
      throw new Error("Subscription not found");
    }

    this.unsubscribe(subscription);
    await subscription.waitStatus();

    this.wss.off("message", subscription.handler);
    this.subscriptions.delete(subscription);
  }

  private unsubscribe = (subscription: MarketSubscription<any, any>) =>
    this.sendRequest(
      subscription.getRequest(
        SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE,
      ),
    );
}
