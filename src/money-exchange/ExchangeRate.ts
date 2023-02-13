export class ExchangeRate {
    private _source: string;
    private _dest: string;
    private _rate: number;


    constructor(source: string, dest: string, rate: number) {
        if(!rate) throw new Error('Can not create an exchange rate without the rate');
        this._source = source;
        this._dest = dest;
        this._rate = rate;
    }


    get source(): string {
        return this._source;
    }

    get dest(): string {
        return this._dest;
    }

    get rate(): number {
        return this._rate;
    }
}