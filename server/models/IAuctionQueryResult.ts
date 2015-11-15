/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="IRealms"/>
/// <reference path="IAuction"/>

import {IRealms} from "./IRealms";
import {IAuction} from "./IAuction";

export interface IAuctionQueryResult {
    realms: IRealms;
    auctions: IAuction[];
}