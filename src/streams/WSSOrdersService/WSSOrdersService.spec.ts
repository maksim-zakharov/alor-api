import { Condition, Side } from "../../models/models";

describe("WSSOrdersService", () => {
  beforeEach(async () => {
    await testApi.refresh();
    await testApi.ordersWss.authorize({}, console.log);
  });

  it("sendMarketOrder", async () => {
    const dataHandler = jest.fn();

    // const unsubscribe = await testApi.ordersWss.sendMarketOrder(
    //   {
    //     quantity: 1,
    //     side: Side.Buy,
    //     instrument: {
    //       exchange,
    //       symbol: 'SBER',
    //     },
    //     user: {
    //       portfolio
    //     },
    //     checkDuplicates: true
    //   },
    //   dataHandler,
    // );
    //
    // expect(testApi.ordersWss.subscriptions.size).toBe(2);
    //
    // await unsubscribe();
    //
    // expect(testApi.ordersWss.subscriptions.size).toBe(1);
    //
    // expect(dataHandler).toBeCalled();
  });

  // it("sendLimitOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.sendLimitOrder(
  //         {
  //             price: 241,
  //             quantity: 1,
  //             side: Side.Buy,
  //             instrument: {
  //                 exchange,
  //                 symbol: 'SBER',
  //             },
  //             user: {
  //                 portfolio
  //             },
  //             checkDuplicates: true
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("sendStopOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.sendStopOrder(
  //         {
  //             condition: Condition.Less,
  //             triggerPrice: 241,
  //             quantity: 1,
  //             side: Side.Buy,
  //             instrument: {
  //                 exchange,
  //                 symbol: 'SBER',
  //             },
  //             user: {
  //                 portfolio
  //             },
  //             checkDuplicates: true
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("sendStopLimitOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.sendStopLimitOrder(
  //         {
  //             condition: Condition.Less,
  //             triggerPrice: 241,
  //             price: 241,
  //             quantity: 1,
  //             side: Side.Buy,
  //             instrument: {
  //                 exchange,
  //                 symbol: 'SBER',
  //             },
  //             user: {
  //                 portfolio
  //             },
  //             checkDuplicates: true
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("updateMarketOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     // const unsubscribe = await testApi.ordersWss.updateMarketOrder(
  //     //     {
  //     //         quantity: 1,
  //     //         side: Side.Buy,
  //     //         instrument: {
  //     //             exchange,
  //     //             symbol: 'SBER',
  //     //         },
  //     //         user: {
  //     //             portfolio
  //     //         },
  //     //         checkDuplicates: true
  //     //     },
  //     //     dataHandler,
  //     // );
  //     //
  //     // expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //     //
  //     // await unsubscribe();
  //     //
  //     // expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //     //
  //     // expect(dataHandler).toBeCalled();
  // });
  //
  // it("updateLimitOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const limitOrder  = await testApi.orders.sendLimitOrder(
  //         {
  //             price: 241,
  //             quantity: 1,
  //             side: Side.Buy,
  //             instrument: {
  //                 exchange,
  //                 symbol: 'SBER',
  //             },
  //             user: {
  //                 portfolio
  //             },
  //         })
  //
  //     const unsubscribe = await testApi.ordersWss.updateLimitOrder(
  //         {
  //             orderId: limitOrder.orderNumber,
  //             quantity: 2,
  //             side: Side.Buy,
  //             instrument: {
  //                 exchange,
  //                 symbol: 'SBER',
  //             },
  //             user: {
  //                 portfolio
  //             },
  //             checkDuplicates: true
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     const limitOrders  = await testApi.clientInfo.getOrders({
  //         exchange,
  //         portfolio
  //     })
  //
  //     const order = limitOrders.find(i => i.symbol === 'SBER' && i.qty === 2);
  //
  //     expect(order).toBeDefined();
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("updateStopOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.updateStopOrder(
  //         {
  //             quantity: 1,
  //             side: Side.Buy,
  //             instrument: {
  //                 exchange,
  //                 symbol: 'SBER',
  //             },
  //             user: {
  //                 portfolio
  //             },
  //             checkDuplicates: true
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("updateStopLimitOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.updateStopLimitOrder(
  //         {
  //             quantity: 1,
  //             side: Side.Buy,
  //             instrument: {
  //                 exchange,
  //                 symbol: 'SBER',
  //             },
  //             user: {
  //                 portfolio
  //             },
  //             checkDuplicates: true
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("cancelMarketOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.cancelMarketOrder(
  //         {
  //             orderId: 0
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("cancelLimitOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.cancelLimitOrder(
  //         {
  //             orderId: 0
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("cancelStopOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.cancelStopOrder(
  //         {
  //             orderId: 0
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
  //
  // it("cancelStopLimitOrder", async () => {
  //     const dataHandler = jest.fn();
  //
  //     const unsubscribe = await testApi.ordersWss.cancelStopLimitOrder(
  //         {
  //             orderId: 0
  //         },
  //         dataHandler,
  //     );
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(2);
  //
  //     await unsubscribe();
  //
  //     expect(testApi.ordersWss.subscriptions.size).toBe(1);
  //
  //     expect(dataHandler).toBeCalled();
  // });
});
