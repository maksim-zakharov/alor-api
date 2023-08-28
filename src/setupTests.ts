import "dotenv/config";
import assert from "assert";
import { Endpoint, Exchange, WssEndpoint } from "./types";
import process from "process";
import AlorApi from "./api";

let portfolio = process.env.ALOR_PORTFOLIO as string;
let exchange = Exchange.MOEX;

const testApi = new AlorApi({
  endpoint: Endpoint.PROD,
  token: process.env.ALOR_REFRESH_TOKEN!,
  accessToken: process.env.ALOR_ACCESS_TOKEN!,
  wssEndpoint: WssEndpoint.PROD,
});

type Assert = typeof assert.strict;

declare global {
  const assert: Assert;
  const portfolio: string;
  const exchange: Exchange | any;

  const testApi: AlorApi;
}

Object.assign(global, {
  assert: assert.strict,
  testApi,
  portfolio,
  exchange,
});
