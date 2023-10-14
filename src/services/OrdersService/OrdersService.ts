import { AxiosInstance } from "axios";
import {
  BodyrequestOrdersActionsLimitTV,
  BodyrequestOrdersActionsLimitTVput,
  BodyrequestOrdersActionsMarketTV,
  BodyrequestOrdersActionsMarketTVput,
  CommandApiV2ClientOrdersDeleteParams,
  EstimateOrderViewModel,
  OrdersActions400CommandAPI,
  OrdersActionsLimitMarket,
} from "../../models/models";
import { v4 as uuidv } from "uuid";

export class OrdersService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Создание рыночной заявки
   */
  async sendMarketOrder(
    body: BodyrequestOrdersActionsMarketTV,
  ): Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI> {
    const requestId = uuidv();

    return this.http
      .post(
        `/commandapi/warptrans/TRADE/v2/client/orders/actions/market`,
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
   * Создание лимитной заявки
   */
  async sendLimitOrder(
    body: BodyrequestOrdersActionsLimitTV,
  ): Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI> {
    const requestId = uuidv();

    return this.http
      .post(
        `/commandapi/warptrans/TRADE/v2/client/orders/actions/limit`,
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
   * Изменение рыночной заявки
   */
  async updateMarketOrder(
    body: BodyrequestOrdersActionsMarketTVput & { id: number },
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http
      .put(
        `/commandapi/warptrans/TRADE/v2/client/orders/actions/market/${body.id}`,
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
   * Изменение рыночной заявки
   */
  async updateLimitOrder(
    body: BodyrequestOrdersActionsLimitTVput & { id: number },
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http
      .put(
        `/commandapi/warptrans/TRADE/v2/client/orders/actions/limit/${body.id}`,
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
    params: CommandApiV2ClientOrdersDeleteParams,
  ): Promise<string> {
    return this.http
      .delete(
        `/commandapi/warptrans/TRADE/v2/client/orders/${params.orderId}`,
        { params },
      )
      .then((r) => r.data);
  }

  /**
   * Провести оценку одной заявки
   */
  async estimateOrder(params: EstimateOrderViewModel): Promise<string> {
    return this.http
      .post(`/commandapi/warptrans/TRADE/v2/client/orders/estimate`, params)
      .then((r) => r.data);
  }

  /**
   * Провести оценку нескольких заявок
   */
  async estimateAllOrders(params: EstimateOrderViewModel[]): Promise<string> {
    return this.http
      .post(`/commandapi/warptrans/TRADE/v2/client/orders/estimate/all`, params)
      .then((r) => r.data);
  }
}
