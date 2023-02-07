import { makeObservable, observable, action } from "mobx"

const _statuses = {
    disable: 'disable',
    normal: 'normal',
    active: 'active',
}

class ProductionStatusStore {

    productionStatus = undefined;

    constructor() {
        makeObservable(this, {
            productionStatus: observable,

            setProductionStatus: action.bound,
        })
    }

    setProductionStatus(value) {
        this.productionStatus = _statuses[value] ?? undefined;
    }
}

export default new ProductionStatusStore()