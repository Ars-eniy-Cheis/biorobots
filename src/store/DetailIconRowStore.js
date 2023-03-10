import { makeObservable, observable, action } from "mobx"
class DetailIconRowStore {

    detailIconState = [];
    detailIconImage = [];

    constructor() {
        makeObservable(this, {
            detailIconState: observable,
            detailIconImage: observable,

            addDetailIconState: action.bound,
            addDetailIconImage: action.bound,
            setDetailIconState: action.bound,
            setDetailIconImage: action.bound
        })
    }

    addDetailIconState(value) {
        this.detailIconState.push(value);
    }

    addDetailIconImage(value) {
        this.detailIconImage.push(value);
    }

    setDetailIconState(index, value) {
        this.detailIconState[index] = value;
    }

    setDetailIconImage(index, value) {
        this.detailIconImage[index] = value;
    }
}

export default DetailIconRowStore