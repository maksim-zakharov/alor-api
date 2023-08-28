import { Condition, Side } from "../../models/models";

describe("StopOrdersService", () => {
  it("sendStopOrder", async () => {
    const quantity = 1;
    const triggerPrice = 235;
    const symbol = "SBER";

    const res = await testApi.stoporders.sendStopOrder({
      quantity,
      triggerPrice,
      condition: Condition.Less,
      side: Side.Buy,
      user: { portfolio, exchange },
      instrument: { exchange, symbol },
    });
    console.log(res);
    expect(res.message).toBe("success");
  });

  it("sendStopLimitOrder", async () => {
    const quantity = 1;
    const symbol = "SBER";
    const triggerPrice = 280;
    const res = await testApi.stoporders.sendStopLimitOrder({
      quantity,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
      condition: Condition.More,
      triggerPrice,
    });
    console.log(res);
  });

  it("updateStopOrder", async () => {
    const quantity = 1;
    const quantity2 = 2;
    const symbol = "SBER";
    const triggerPrice = 235;

    const res1 = await testApi.stoporders.sendStopOrder({
      quantity,
      triggerPrice,
      condition: Condition.Less,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
    });

    const res2 = await testApi.stoporders.updateStopOrder({
      orderId: res1.orderNumber,
      quantity: quantity2,
      triggerPrice,
      condition: Condition.Less,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
    });

    const order = await testApi.clientInfo.getStopOrderByOrderId({
      orderId: res2.orderNumber!,
      exchange,
      portfolio,
    });

    expect(res2.message).toBe("success");
    expect(order.qty).toBe(quantity2);
  });

  it("updateStopLimitOrder", async () => {
    const quantity = 1;
    const quantity2 = 2;
    const symbol = "SBER";
    const triggerPrice = 280;

    const res1 = await testApi.stoporders.sendStopLimitOrder({
      quantity,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
      condition: Condition.More,
      triggerPrice,
    });

    const res2 = await testApi.stoporders.updateStopOrder({
      orderId: res1.orderNumber,
      quantity: quantity2,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
      condition: Condition.More,
      triggerPrice,
    });

    const order = await testApi.clientInfo.getStopOrderByOrderId({
      orderId: res2.orderNumber!,
      exchange,
      portfolio,
    });

    expect(res2.message).toBe("success");
    expect(order.qty).toBe(quantity2);
  });

  it("cancelOrder", async () => {
    const quantity = 1;
    const triggerPrice = 235;
    const symbol = "SBER";

    const res = await testApi.stoporders.sendStopOrder({
      quantity,
      triggerPrice,
      condition: Condition.Less,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
    });

    const order = await testApi.clientInfo.getStopOrderByOrderId({
      orderId: res.orderNumber!,
      exchange,
      portfolio,
    });

    const cancelRes = await testApi.stoporders.cancelOrder({
      exchange,
      orderId: Number(order.id),
      portfolio,
      stop: true,
    });

    expect(cancelRes).toEqual("success");
  });

  afterAll(async () => {
    const stopOrders = await testApi.clientInfo.getStopOrders({
      exchange,
      portfolio,
    });
    await Promise.all(
      stopOrders.map((so) =>
        testApi.stoporders.cancelOrder({
          stop: true,
          portfolio,
          exchange,
          orderId: Number(so.id),
        }),
      ),
    );
  });
});
