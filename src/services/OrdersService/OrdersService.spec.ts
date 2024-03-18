import {
  Order,
  Orders,
  OrdersActionsLimitMarket,
  OrdersActionsLimitMarketCommandAPI,
  Side,
} from "../../models/models";

describe("OrdersService", () => {
  it("sendLimitOrder", async () => {
    const quantity = 1;
    const price = 235;
    const symbol = "SBER";

    const res = await testApi.orders.sendLimitOrder({
      quantity,
      icebergFixed: quantity,
      icebergVariance: quantity,
      price,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
    });
    console.log(res);
    expect(res.message).toBe("success");
  });

  it("sendMarketOrder", async () => {
    const quantity = 1;
    const symbol = "SBER";
    // const res = await testApi.orders.sendMarketOrder({ quantity, side: Side.Buy, user: {portfolio}, instrument: {exchange, symbol}, type: 'market' });
    // console.log(res);
  });

  it("updateLimitOrder", async () => {
    const quantity = 1;
    const quantity2 = 2;
    const symbol = "SBER";
    const price = 235;

    const res1: OrdersActionsLimitMarketCommandAPI =
      await testApi.orders.sendLimitOrder({
        quantity,
        icebergFixed: quantity,
        icebergVariance: quantity,
        price,
        side: Side.Buy,
        user: { portfolio },
        instrument: { exchange, symbol },
      });

    const res2 = await testApi.orders.updateLimitOrder({
      // @ts-ignore
      id: res1.orderNumber,
      quantity,
      icebergFixed: quantity,
      icebergVariance: quantity,
      price,
      side: Side.Buy,
      user: { portfolio },
      instrument: { exchange, symbol },
      type: "limit",
    });

    const order: Order = await testApi.clientInfo.getOrderById({
      orderId: res2.orderNumber!,
      exchange,
      portfolio,
    });

    expect(res2.message).toBe("success");
    expect(order.qty).toBe(quantity2);
  });

  it("updateMarketOrder", async () => {
    const quantity = 1;
    const symbol = "SBER";
    // const res = await testApi.orders.updateMarketOrder({ quantity, side: Side.Buy, user: {portfolio}, instrument: {exchange, symbol}, type: 'market' });
    // console.log(res);
  });

  it("cancelOrder", async () => {
    const quantity = 1;
    const price = 235;
    const symbol = "SBER";

    const res: OrdersActionsLimitMarketCommandAPI =
      await testApi.orders.sendLimitOrder({
        quantity,
        icebergFixed: quantity,
        icebergVariance: quantity,
        price,
        side: Side.Buy,
        user: { portfolio },
        instrument: { exchange, symbol },
      });

    const orders: Orders = await testApi.clientInfo.getOrders({
      exchange,
      portfolio,
    });

    const order = orders.find((o) => o.id === res.orderNumber)!;

    const cancelRes = await testApi.orders.cancelOrder({
      exchange,
      orderId: Number(order.id),
      portfolio,
      stop: false,
    });

    expect(cancelRes).toEqual("success");
  });

  it("estimateOrder", async () => {
    const res = await testApi.orders.estimateOrder({
      portfolio,
      exchange,
      ticker: "SBER",
    });
    console.log(res);
  });

  it("estimateAllOrders", async () => {
    const res = await testApi.orders.estimateAllOrders([
      { portfolio, exchange, ticker: "SBER" },
    ]);
    console.log(res);
  });
});
