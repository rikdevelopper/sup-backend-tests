import {Currency} from "./Currency";

const rateTableFromJson = require('./test.json');


export class Rate {
    currency: Currency;
    rateTable: [][] = rateTableFromJson;

    exchange(source:Currency, dest:Currency, value:number): number {
        return this.rateTable[source.name][dest.name] * value;
    }

}