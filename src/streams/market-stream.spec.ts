import { Exchange } from "../models/models";
import { fromTo } from "../helpers";

describe("MarketStream", () => {
  beforeEach(async () => {
    await testApi.refresh();
  });

  it("orderBook", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.orderBook(
      {
        exchange: Exchange.MOEX,
        code: "SBER",
        depth: 20,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  it("candles", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.candles(
      {
        exchange: Exchange.MOEX,
        code: "SBER",
        tf: "60",
        ...fromTo("-5m"),
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  it("quotes", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.quotes(
      {
        exchange: Exchange.MOEX,
        code: "SBER",
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  // it('alltrades', async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.subscriptions.alltrades({
  //         exchange: Exchange.MOEX,
  //         depth: 50,
  //     }, dataHandler)
  //
  //     expect(testApi.subscriptions.subscriptions.size).toBe(1);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.subscriptions.subscriptions.size).toBe(0);
  //
  //     expect(dataHandler).toBeCalled();
  // });

  it("positions", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.positions(
      {
        exchange: Exchange.MOEX,
        portfolio,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  it("summary", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.summary(
      {
        exchange: Exchange.MOEX,
        portfolio,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  it("risks", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.risks(
      {
        exchange: Exchange.MOEX,
        portfolio,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  it("spectraRisks", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.spectraRisks(
      {
        exchange: Exchange.MOEX,
        portfolio,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  it("trades", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.trades(
      {
        exchange: Exchange.MOEX,
        portfolio,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    // expect(dataHandler).toBeCalled();
  });

  it("orders", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.orders(
      {
        exchange: Exchange.MOEX,
        portfolio,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    // expect(dataHandler).toBeCalled();
  });

  it("instruments", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.instruments(
      {
        exchange: Exchange.MOEX,
        code: "SBER",
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    expect(dataHandler).toBeCalled();
  });

  it("stoporders", async () => {
    const dataHandler = jest.fn();

    const unsubscribe = await testApi.subscriptions.stoporders(
      {
        exchange: Exchange.MOEX,
        portfolio,
      },
      dataHandler,
    );

    expect(testApi.subscriptions.subscriptions.size).toBe(1);

    await unsubscribe();

    expect(testApi.subscriptions.subscriptions.size).toBe(0);

    // expect(dataHandler).toBeCalled();
  });
});
