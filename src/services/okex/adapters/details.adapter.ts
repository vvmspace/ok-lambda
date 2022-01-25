import {IDetail} from "@ok/models";

export const detailsAdapter = (details: any[]): IDetail[] =>
    details.map(detail => ({
    ...detail,
        eq: parseFloat(detail.eq),
        eqUsd: parseFloat(detail.eqUsd)
}))