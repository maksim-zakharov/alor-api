import {
    MarketSubscription,
    UniversalMarketResponse,
} from '../market-subscription';
import {AlorOpenApiOptions, SubscriptionAction} from '../types';
import { WebSocket } from 'ws';
// import { refreshTokenMiddleware } from './utils';

export class BaseStream {
    options = {
        autoReconnect: true,
        autoReconnectDelayMin: 100,
        autoReconnectDelayMax: 2000,
        endpoint: '',
        token: '',
    };
    protected accessToken: string = 'invalid';
    protected wss: WebSocket;
    protected autoReconnectDelay = 0;
    subscriptions = new Set<MarketSubscription<any, any>>();

    protected readonly refresh: any;

    constructor(options: AlorOpenApiOptions) {
        this.options = { ...this.options, ...options };

        // this.refresh = refreshTokenMiddleware(
        //     axios,
        //     this.options.token,
        //     (token) => (this.accessToken = token),
        // );

        this.wss = new WebSocket(options.wssEndpoint);
        this.wss.on('open', () => {
            console.log(`[WSS] Подключение к ${this.wss.url} установлено.`);
        });
        this.wss.setMaxListeners(100);
        this.wss.on('close', async (error) => {
            console.log(`[WSS] Подключение к ${this.wss.url} потеряно.`);
            // await this.onClose(error);
        });
        this.wss.on('error', (error) => {
            throw error;
        });
    }

    protected async waitEvents() {
        return new Promise((resolve, reject) => {
            // const refresh = refreshTokenMiddleware(
            //   axios,
            //   this.options.token,
            //   (token) => (this.accessToken = token),
            // );
            const openWS = () => {
                this.wss.emit('open');
                this.wss.on('open', () => {
                    resolve(true);
                });

                this.wss.onclose = () => {
                    reject(false);
                };
            };
            openWS();
        });
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

    protected async onClose(error?: number) {
        return new Promise<void>((resolve, reject) => {
            this.subscriptions.forEach((subscription) =>
                this.wss.off('message', subscription.handler),
            );
            if (error && this.options.autoReconnect) {
                setTimeout(
                    () => this.reconnect().then(resolve).catch(reject),
                    this.autoReconnectDelay,
                );
                this.calcAutoReconnectDelay();
            } else {
                resolve();
            }
        });
    }

    /**
     * Установлен ли обработчик.
     */
    hasListener(event: string, handler: any) {
        return this.wss.listeners(event).includes(handler);
    }

    protected sendRequest(req) {
        this.wss.send(JSON.stringify(req));
    }

    protected async connect() {
        if (this.wss.readyState !== WebSocket.OPEN) {
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
            throw new Error('Subscription not found');
        }

        if (withAuth) await this.connect();
        this.sendRequest(subscription.getRequest());
        if (!this.hasListener('message', subscription.handler)) {
            this.wss.on('message', subscription.handler);
        }
        try {
            await subscription.waitStatus();
        } catch (e) {
            if (e.httpCode === 401) {
                console.log(
                    `[WSS] RequestId: ${e.requestGuid} HttpCode: ${e.httpCode} Message: ${e.message}`,
                );
                await this.refresh().then(() =>
                    console.log('[WSS] Получен новый токен'),
                );
                await this.onClose(e.httpCode);
            } else {
                this.wss.off('message', subscription.handler);
                throw e;
            }
        }
        this.subscriptions.add(subscription);
        return () => this.unwatch(subscription);
    }

    protected async unwatch(subscription: MarketSubscription<any, any>) {
        if (!subscription || !(subscription instanceof MarketSubscription)) {
            throw new Error('Subscription not found');
        }

        this.sendRequest(
            subscription.getRequest(
                SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE,
            ),
        );
        await subscription.waitStatus();
        this.wss.off('message', subscription.handler);
        this.subscriptions.delete(subscription);
    }
}
