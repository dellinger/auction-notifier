/// <reference path="../typings/tsd.d.ts"/>
import * as nconf from "nconf";

export class Config {

    constructor(){
        var environment = process.env.NODE_ENV = process.env.NODE_ENV || "development";
        var configFile = __dirname + `/${environment}.json`;
        console.log(`Using Config File ${configFile}`);
        nconf.file({file: configFile});
    }

    get(key: string): string{
        var result = nconf.get(key);
        if(result){
            console.log(`Retrieved config ${key} with value ${result}`);
        } else {
            throw new Error(`Could not retrieve config property ${key} with value ${result}`);
        }

        return result;
    }
}
