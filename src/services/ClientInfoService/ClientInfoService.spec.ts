import { Trades } from "../../models/models";

describe("ClientInfoService", () => {
  it("getOrders", async () => {
    const res = await testApi.clientInfo.getOrders({ portfolio, exchange });
    console.log(res);
  });

  it("getOrderById", async () => {
    const orderId = 0;
    const res = await testApi.clientInfo.getOrderById({
      portfolio,
      exchange,
      orderId,
    });
    console.log(res);
  });

  it("getPositions", async () => {
    const res = await testApi.clientInfo.getPositions({
      portfolio,
      exchange,
      withoutCurrency: true,
    });
    console.log(res);
  });

  it("getPositionBySymbol", async () => {
    const symbol = "SBER";
    const res = await testApi.clientInfo.getPositionBySymbol({
      symbol,
      portfolio,
      exchange,
    });
    console.log(res);
  });

  it("getStopOrders", async () => {
    const res = await testApi.clientInfo.getStopOrders({ portfolio, exchange });
    console.log(res);
  });

  it("getStopOrderByOrderId", async () => {
    const orderId = 0;
    const res = await testApi.clientInfo.getStopOrderByOrderId({
      orderId,
      portfolio,
      exchange,
    });
    console.log(res);
  });

  it("getHistoryTrades", async () => {
    const res = await testApi.clientInfo.getHistoryTrades({
      portfolio,
      exchange,
    });
    console.log(res);
  });

  it("getHistoryTradesBySymbol", async () => {
    const trades: Trades = await testApi.clientInfo.getHistoryTrades({
      portfolio,
      exchange,
    });
    const symbol = trades[0].symbol!;
    const symbolTrades = trades.filter((t) => t.symbol === symbol);

    const res = await testApi.clientInfo.getHistoryTradesBySymbol({
      symbol,
      portfolio,
      exchange,
    });

    expect(res).toEqual(symbolTrades);
  });

  it("getTrades", async () => {
    const res = await testApi.clientInfo.getTrades({ portfolio, exchange });
    console.log(res);
  });

  it("getTradesBySymbol", async () => {
    const ticker = "SBER";
    const res = await testApi.clientInfo.getTradesBySymbol({
      ticker,
      portfolio,
      exchange,
    });
    console.log(res);
  });

  it("getSummary", async () => {
    const res = await testApi.clientInfo.getSummary({ portfolio, exchange });
    console.log(res);
  });

  it("getFortsRisk", async () => {
    const res = await testApi.clientInfo.getFortsRisk({ portfolio, exchange });
    console.log(res);
  });

  it("getRisk", async () => {
    const res = await testApi.clientInfo.getRisk({ portfolio, exchange });
    console.log(res);
  });
});
