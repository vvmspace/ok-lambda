// non-ts lib
// @ts-ignore
import { v5 } from 'okex-api';
import * as http2 from 'http2-wrapper';
import { IGetAccounts } from "@ok/models";
import {detailsAdapter} from "./adapters/details.adapter";
const { OKEX_API_KEY, OKEX_API_SECRET, OKEX_API_PASSWORD, OKEX_API_BASE_URL } = process.env;

export class OkexService {
    private httpApi: any;

    constructor() {
        const options = OKEX_API_BASE_URL ? { baseUrl: OKEX_API_BASE_URL } : {};
        this.httpApi = new v5.HttpApi(OKEX_API_KEY, OKEX_API_SECRET, OKEX_API_PASSWORD, {...options, transport: http2})
    }

    async getAccounts(tickers: string | string[]): Promise<IGetAccounts> {
        const tickersString = typeof tickers !== 'string' ? tickers.join(',') : tickers;
        const { details, totalEq } = this.httpApi.getAccounts(tickersString);

        return {
            details: detailsAdapter(details),
            totalEq: parseFloat(totalEq)
        }
    }
}