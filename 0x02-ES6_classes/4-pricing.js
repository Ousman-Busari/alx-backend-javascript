/* eslint-disable */
import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number')
        }
        if (!(currency instanceof Currency)) {
            throw new TypeError('Currency must be a Currency')
        }
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount
    }

    set amount(value) {
        if (typeof amount !== "number") {
          throw new TypeError("Amount must be a number");
        }
    }

    get currency() {
        return this._currency
    }

    set currency(value) {
        if (!(value instanceof Currency)) {
          throw new TypeError("Currency must be a Currency");
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency._name} (${this._currency.code})`
    }

    static convertPrice(amount, conversationRate) {
        return amount * conversationRate
    }
}
