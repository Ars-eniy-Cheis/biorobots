import { makeAutoObservable } from "mobx"

class GypsyCoinHandler {

    maxCoins = 100;
    coinsQuantity = 45;
    gypsyingCoins = 1;
    isCheked = false;

    constructor() {
        makeAutoObservable(this)
    }

    increment(price) {
        this.coinsQuantity += price;
    }

    decrement(price) {
        this.coinsQuantity -= price;
    }

    check() {
        this.isCheked = !this.isCheked;
    }
}

export default new GypsyCoinHandler()