import { Securities } from "../../models/models";

describe("InstrumentsService", () => {
  let symbol = "SBER";

  it("getSecurities", async () => {
    const res = await testApi.instruments.getSecurities({ query: "" });
    console.log(res);
  });

  it("getSecuritiesByExchange", async () => {
    const res = await testApi.instruments.getSecuritiesByExchange({ exchange });
    console.log(res);
  });

  it("getSecuritiesByExchangeAndSymbol", async () => {
    const res = await testApi.instruments.getSecurityByExchangeAndSymbol({
      symbol,
      exchange,
    });
    console.log(res);
  });

  it("getQuotes", async () => {
    const res = await testApi.instruments.getQuotes({
      symbols: `${exchange}:${symbol}`,
    });
    console.log(res);
  });

  it("getOrderbookBySeccode", async () => {
    const res = await testApi.instruments.getOrderbookBySeccode({
      symbol: symbol,
      exchange,
    });
    console.log(res);
  });

  it("getAlltrades", async () => {
    const res = await testApi.instruments.getAlltrades({ symbol, exchange });
    console.log(res);
  });

  it("getAlltradesHistory", async () => {
    const res = await testApi.instruments.getAlltradesHistory({
      symbol,
      exchange,
      limit: 10,
    });
    console.log(res);
  });

  it("getActualFuturesQuote", async () => {
    const secs: Securities = (await testApi.instruments.getSecurities({
      sector: "FORTS",
      query: "LKOH",
    })) as any;
    console.log(secs);
    const res = await testApi.instruments.getActualFuturesQuote({
      symbol: secs[0].symbol!,
      exchange,
    });
    console.log(res);
  });

  it("getRiskRates", async () => {
    const res = await testApi.instruments.getRiskRates({ exchange });
    console.log(res);
  });

  it("getHistory", async () => {
    const res = await testApi.instruments.getHistory({
      symbol,
      exchange,
      from: Date.now(),
      tf: "15",
      to: Date.now(),
    });
    console.log(res);
  });
});
