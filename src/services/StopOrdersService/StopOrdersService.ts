import { AxiosInstance } from "axios";
import {
  BodyrequestOrdersActionsStopLimitTVWarp,
  BodyrequestOrdersActionsStopMarketTVWarp,
  CommandApiWarpV2ClientOrdersDeleteParams,
  CommandwsReqUpdateStopLimitOrder,
  CommandwsReqUpdateStopOrder,
  OrdersActions400CommandAPI,
  OrdersActionsLimitMarket,
} from "../../models/models";
import { v4 as uuidv } from "uuid";

export class StopOrdersService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Создание рыночной заявки
   */
  async sendStopOrder(
    body: BodyrequestOrdersActionsStopMarketTVWarp,
  ): Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI> {
    const requestId = uuidv();

    return this.http
      .post(`/commandapi/warptrans/TRADE/v2/client/orders/actions/stop`, body, {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      })
      .then((r) => r.data);
  }

  /**
   * Создание лимитной заявки
   */
  async sendStopLimitOrder(
    body: BodyrequestOrdersActionsStopLimitTVWarp,
  ): Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI> {
    const requestId = uuidv();

    return this.http
      .post(
        `/commandapi/warptrans/TRADE/v2/client/orders/actions/stopLimit`,
        body,
        {
          headers: {
            "X-ALOR-REQID": requestId,
          },
        },
      )
      .then((r) => r.data);
  }

  /**
   * Изменение стоп-заявки
   */
  async updateStopOrder(
    body: CommandwsReqUpdateStopOrder,
  ): Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI> {
    const requestId = uuidv();

    return this.http
      .put(
        `/commandapi/warptrans/TRADE/v2/client/orders/actions/stop/${body.orderId}`,
        body,
        {
          headers: {
            "X-ALOR-REQID": requestId,
          },
        },
      )
      .then((r) => r.data);
  }

  /**
   * Изменение стоп-лимитной заявки
   */
  async updateStopLimitOrder(
    body: CommandwsReqUpdateStopLimitOrder,
  ): Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI> {
    const requestId = uuidv();

    return this.http
      .put(
        `/commandapi/warptrans/TRADE/v2/client/orders/actions/stoplimit/${body.orderId}`,
        body,
        {
          headers: {
            "X-ALOR-REQID": requestId,
          },
        },
      )
      .then((r) => r.data);
  }

  /**
   * Снятие заявки
   */
  async cancelOrder(
    params: CommandApiWarpV2ClientOrdersDeleteParams,
  ): Promise<string> {
    return this.http
      .delete(
        `/commandapi/warptrans/TRADE/v2/client/orders/${params.orderId}`,
        { params },
      )
      .then((r) => r.data);
  }
}
