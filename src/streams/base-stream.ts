import { MarketSubscription } from "../market-subscription";
import { SubscriptionAction } from "../types";
import { WebSocket } from "ws";
import AlorApi from "../api";

export class BaseStream {
  connected = false;
  options = {
    autoReconnect: true,
    autoReconnectDelayMin: 100,
    autoReconnectDelayMax: 2000,
    endpoint: "",
    token: "",
  };

  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 1000;
  private reconnectDecay = 500;
  private maxReconnectInterval = 5000;

  protected wss: WebSocket;
  protected autoReconnectDelay = 0;
  subscriptions = new Set<MarketSubscription<any, any>>();

  private readonly refresh: any;

  constructor(protected readonly api: AlorApi) {
    this.options = { ...this.options, ...this.api.options };
    this.refresh = this.api.refresh;

    this.connect();
  }

  private connect() {
    this.wss = new WebSocket(this.api.options.wssEndpoint);
    this.wss.setMaxListeners(0);

    this.wss.onopen = async () => {
      this.connected = true;
      this.reconnectAttempts = 0;
      console.log("WebSocket connected");

      // Повторная подписка на все события
      await this.resubscribe();
    };

    this.wss.on("close", (code, reason) => {
      console.warn(`Connection closed: code=${code}, reason=${reason}`);
      this.connected = false;
      this.attemptReconnect();
    });
  }

  setMaxListeners(listeners: number) {
    this.wss.setMaxListeners(listeners);
  }

  protected async waitEvents() {
    this.connected = true;
    this.wss.emit("open");
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

  // Попытка переподключения
  private attemptReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error("Max reconnect attempts reached");
      return;
    }

    const delay = Math.min(
      this.reconnectInterval *
        Math.pow(this.reconnectDecay, this.reconnectAttempts),
      this.maxReconnectInterval,
    );

    console.log(`Attempting to reconnect in ${delay}ms...`);
    setTimeout(() => {
      this.reconnectAttempts++;
      this.connect();
    }, delay);
  }

  private async resubscribe() {
    for (const subscription of this.subscriptions) {
      await this.subscribe(subscription);
    }
  }

  protected async subscribe(subscription: MarketSubscription<any, any>) {
    if (!subscription || !(subscription instanceof MarketSubscription)) {
      throw new Error("Subscription not found");
    }

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
