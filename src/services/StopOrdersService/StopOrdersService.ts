import { AxiosInstance } from "axios";
import {
  BodyrequestOrdersActionsLimitTV,
  BodyrequestOrdersActionsLimitTVput,
  BodyrequestOrdersActionsMarketTV,
  BodyrequestOrdersActionsMarketTVput,
  BodyrequestOrdersActionsStopLimitTVWarp,
  BodyrequestOrdersActionsStopMarketTVWarp,
  CommandApiV2ClientOrdersDeleteParams,
  CommandwsReqCreateStopLimitOrder,
  CommandwsReqCreateStopOrder,
  CommandwsReqUpdateStopLimitOrder,
  CommandwsReqUpdateStopOrder,
  EstimateOrderViewModel,
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
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.post(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/stop`,
      body,
      {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      },
    );
  }

  /**
   * Создание лимитной заявки
   */
  async sendStopLimitOrder(
    body: BodyrequestOrdersActionsStopLimitTVWarp,
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.post(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/stopLimit`,
      body,
      {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      },
    );
  }

  /**
   * Изменение стоп-заявки
   */
  async updateStopOrder(
    body: CommandwsReqUpdateStopOrder,
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.put(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/stop/${body.orderId}`,
      body,
      {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      },
    );
  }

  /**
   * Изменение стоп-лимитной заявки
   */
  async updateStopLimitOrder(
    body: CommandwsReqUpdateStopLimitOrder,
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.put(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/stoplimit/${body.orderId}`,
      body,
      {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      },
    );
  }

  /**
   * Снятие заявки
   */
  async cancelOrder(
    params: CommandApiV2ClientOrdersDeleteParams,
  ): Promise<string> {
    return this.http.delete(
      `/commandapi/warptrans/TRADE/v2/client/orders/${params.orderId}`,
      { params },
    );
  }
}
