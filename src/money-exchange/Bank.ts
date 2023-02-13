import {ExchangeRate} from "./ExchangeRate";

export class Bank {

    private readonly name: string;
    private readonly rates: ExchangeRate[];

    constructor(name: string) {
        this.name = name;
        this.rates = [];
    }

    addRate(source: string, dest: string, rate: number) {
        if (this.getRate(source, dest)) throw new Error('Rate already defined');
        this.rates.push(new ExchangeRate(source, dest, rate));
    }

    getRate(source: string, dest: string): number | undefined {
        const exchangeRate = this.rates.find(value => value.source === source && value.dest === dest);
        return exchangeRate ? exchangeRate.rate : undefined;
    }

    exchange(sourceValue: number, sourceCurrency: string, targetCurrency: string) {
        return this.getRate(sourceCurrency, targetCurrency) * sourceValue;
    }
}