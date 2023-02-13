import {assert} from "chai";
import {Bank} from "../../src/money-exchange/Bank";

let societeGenerale: Bank;
describe('Bank exchange', () => {
    beforeEach(() => societeGenerale = new Bank('SG'))
    it('Bank should add their exchange rate', () => {
        societeGenerale.addRate('EUR', 'USD', 1.5);
        assert.strictEqual(societeGenerale.getRate('EUR', 'USD'), 1.5);
        societeGenerale.addRate('EUR', 'CHF', 2);
        assert.strictEqual(societeGenerale.getRate('EUR', 'CHF'), 2);
    });
    it('Bank should never have two different rates for same currencies', () => {
        societeGenerale.addRate('EUR', 'USD', 1.5);
        assert.throw(() => societeGenerale.addRate('EUR', 'USD', 2));
    });
    it('Exchange currencies must be OK with specific bank rate', () => {
        societeGenerale.addRate('EUR', 'USD', 1.5);
        assert.strictEqual(societeGenerale.exchange(5, 'EUR', 'USD'), 5 * 1.5);
        assert.strictEqual(societeGenerale.exchange(2, 'EUR', 'USD'), 2 * 1.5);
        assert.strictEqual(societeGenerale.exchange(2, 'EUR', 'USD'), 2 * 1.5);
    });
    it('Can not add null rate to bank', () => {
        assert.throw(() => societeGenerale.addRate('EUR', 'USD', null));
    });
});