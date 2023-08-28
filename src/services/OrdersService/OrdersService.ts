import { AxiosInstance } from "axios";
import {
  BodyrequestOrdersActionsLimitTV,
  BodyrequestOrdersActionsLimitTVput,
  BodyrequestOrdersActionsMarketTV,
  BodyrequestOrdersActionsMarketTVput,
  CommandApiV2ClientOrdersDeleteParams,
  EstimateOrderViewModel,
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
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.post(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/market`,
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
  async sendLimitOrder(
    body: BodyrequestOrdersActionsLimitTV,
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.post(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/limit`,
      body,
      {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      },
    );
  }

  /**
   * Изменение рыночной заявки
   */
  async updateMarketOrder(
    body: BodyrequestOrdersActionsMarketTVput,
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.put(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/market/${body.id}`,
      body,
      {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      },
    );
  }

  /**
   * Изменение рыночной заявки
   */
  async updateLimitOrder(
    body: BodyrequestOrdersActionsLimitTVput,
  ): Promise<OrdersActionsLimitMarket> {
    const requestId = uuidv();

    return this.http.put(
      `/commandapi/warptrans/TRADE/v2/client/orders/actions/limit/${body.id}`,
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

  /**
   * Провести оценку одной заявки
   */
  async estimateOrder(params: EstimateOrderViewModel): Promise<string> {
    return this.http.post(
      `/commandapi/warptrans/TRADE/v2/client/orders/estimate`,
      params,
    );
  }

  /**
   * Провести оценку нескольких заявок
   */
  async estimateAllOrders(params: EstimateOrderViewModel[]): Promise<string> {
    return this.http.post(
      `/commandapi/warptrans/TRADE/v2/client/orders/estimate/all`,
      params,
    );
  }
}
