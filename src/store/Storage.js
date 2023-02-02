import { makeObservable, observable, action, computed } from "mobx"

class Storage {

    biohandQuantity = 10;
    biohandBuyPrice = 7;
    biohandSellPrice = 5;

    chipQuantity = 7;
    chipBuyPrice = 5;
    chipSellPrice = 3;

    soulQuantity = 3;
    soulBuyPrice = 25;
    soulSellPrice = 15;


    constructor() {
        makeObservable(this, {
            biohandQuantity: observable,
            chipQuantity: observable,
            soulQuantity: observable,

            incrementBiohandQuantity: action.bound,
            incrementChipQuantity: action.bound,
            incrementSoulQuantity: action.bound,

            decrementBiohandQuantity: action.bound,
            decrementChipQuantity: action.bound,
            decrementSoulQuantity: action.bound,
        })
    }

    incrementBiohandQuantity() {
        this.biohandQuantity++;
        console.log("Increment Bio Hand");
        console.log(this.biohandQuantity);
    }

    incrementChipQuantity() {
        this.chipQuantity++;
        console.log("Increment Chip");
        console.log(this.chipQuantity);
    }

    incrementSoulQuantity() {
        this.soulQuantity++;
        console.log("Increment Soul");
        console.log(this.soulQuantity);
    }

    decrementBiohandQuantity() {
        this.biohandQuantity--;
        console.log("Decrement Bio Hand");
        console.log(this.biohandQuantity);
    }

    decrementChipQuantity() {
        this.chipQuantity--;
        console.log("Decrement Chip");
        console.log(this.chipQuantity);
    }

    decrementSoulQuantity() {
        this.soulQuantity--;
        console.log("Decrement Soul");
        console.log(this.soulQuantity);
    }
}

export default new Storage()