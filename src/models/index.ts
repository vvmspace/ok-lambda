export interface IGetAccounts {
    details: IDetail[],
    totalEq: number
}
export interface IDetail {
    eq: number,
    eqUsd: number
}