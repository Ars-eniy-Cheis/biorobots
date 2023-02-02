import { makeAutoObservable } from "mobx"

class GypsyCoinHandler {

    maxCoins = 100;
    coinsQuantity = 45;
    gypsyingCoins = 1;
    isCheked = false;

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.coinsQuantity += this.gypsyingCoins;
    }

    check() {
        this.isCheked = !this.isCheked;
    }
}

export default new GypsyCoinHandler()