/// <reference path="../../typings/tsd.d.ts"/>

export interface IAuction {
    auc: number;
    item: number;
    owner: string;
    ownerRealm: string;
    bid: number;
    buyout: number;
    quantity: number;
    timeLeft: string;
    rand: number;
    seed: number;
    context: number;
}