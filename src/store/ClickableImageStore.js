import { makeObservable, observable, action } from "mobx"
class ClickableImage {

    clickableimage = undefined;

    constructor() {
        makeObservable(this, {
            clickableimage: observable,

            setClickableImage: action.bound,
        })
    }

    setClickableImage(value) {
        this.clickableimage = value;
    }

}

export default new ClickableImage()