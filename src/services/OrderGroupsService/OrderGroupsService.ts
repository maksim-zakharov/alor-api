import { Axios, AxiosInstance } from "axios";
import {
  BodyrequestCreateOrderGroup,
  BodyrequestModifyOrderGroup,
  BodyresponseOrderGroup,
  CommandapiOrderGroupsErrorResponse,
  CommandapiSuccessResponse,
  OrdergroupsActionsGetOrderGroup,
} from "../../models/models";
import { v4 as uuidv } from "uuid";

export class OrderGroupsService {
  constructor(private readonly http: Axios) {}

  /**
   * Получение всех групп заявок
   */
  async getOrderGroups(): Promise<
    OrdergroupsActionsGetOrderGroup[] | CommandapiOrderGroupsErrorResponse
  > {
    return this.http.get(`/commandapi/api/orderGroups`).then((r) => r.data);
  }

  /**
   * Создание группы заявок
   */
  async createOrderGroup(
    body: BodyrequestCreateOrderGroup,
  ): Promise<BodyresponseOrderGroup | CommandapiOrderGroupsErrorResponse> {
    const requestId = uuidv();

    return this.http
      .post(`/commandapi/api/orderGroups`, body, {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      })
      .then((r) => r.data);
  }

  /**
   * Получение всех групп заявок
   * @param orderGroupId Идентификатор группы заявок
   */
  async getOrderGroupById(
    orderGroupId: string,
  ): Promise<
    OrdergroupsActionsGetOrderGroup | CommandapiOrderGroupsErrorResponse
  > {
    return this.http
      .get(`/commandapi/api/orderGroups/${orderGroupId}`)
      .then((r) => r.data);
  }

  /**
   * Редактирование группы заявок
   */
  async updateOrderGroup(
    body: BodyrequestModifyOrderGroup & { orderGroupId: string },
  ): Promise<CommandapiSuccessResponse | CommandapiOrderGroupsErrorResponse> {
    const requestId = uuidv();

    return this.http
      .put(`/commandapi/api/orderGroups/${body.orderGroupId}`, body, {
        headers: {
          "X-ALOR-REQID": requestId,
        },
      })
      .then((r) => r.data);
  }

  /**
   * Удаление группы заявок
   * @param orderGroupId Идентификатор группы заявок
   */
  async deleteOrderGroup(
    orderGroupId: string,
  ): Promise<CommandapiSuccessResponse | CommandapiOrderGroupsErrorResponse> {
    return this.http
      .delete(`/commandapi/api/orderGroups/${orderGroupId}`)
      .then((r) => r.data);
  }
}
