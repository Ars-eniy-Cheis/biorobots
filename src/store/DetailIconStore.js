import { makeObservable, observable, action } from "mobx"
class DetailIconStore {

    detailIconState = undefined;
    detailIconImage = undefined;

    constructor() {
        makeObservable(this, {
            detailIconState: observable,
            detailIconImage: observable,

            setdetailIconState: action.bound,
            setDetailIconImage: action.bound,
        })
    }

    setdetailIconState(value) {
        this.detailIconState = value;
    }

    setDetailIconImage(value) {
        this.detailIconImage = value;
    }
}

export default DetailIconStore