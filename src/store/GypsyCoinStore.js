import { makeObservable, observable, action, computed } from "mobx"
class GypsyCoinStore {

    maxCoins = 100;
    coinQuantity = 45;
    gypsyingCoins = 1;
    isCheked = false;

    constructor() {
        makeObservable(this, {
            coinQuantity: observable,
            isCheked: observable,

            incrementCoinQuantity: action.bound,
            decrementCoinQuantity: action.bound,
            check: action.bound,

        })
    }

    incrementCoinQuantity(price) {
        this.coinQuantity += price;
    }

    decrementCoinQuantity(price) {
        this.coinQuantity -= price;
    }

    check() {
        this.isCheked = !this.isCheked;
    }
}

export default new GypsyCoinStore()