import { makeObservable, observable, action } from "mobx"
class RobotStore {

    robotType = undefined;
    robotStabilizator = undefined;
    robotImage = undefined;
    robotAlt = undefined;

    constructor() {
        makeObservable(this, {
            robotType: observable,
            robotStabilizator: observable,
            robotImage: observable,
            robotAlt: observable,

            setRobotType: action.bound,
            setRobotStabilizator: action.bound,
            setRobotImage: action.bound,
            setRobotAlt: action.bound

        })
    }

    setRobotType(value) {
        this.robotType = value;
    }

    setRobotStabilizator(value) {
        this.robotStabilizator = value;
    }

    setRobotImage(value) {
        this.robotImage = value;
    }

    setRobotAlt(value) {
        this.robotAlt = value;
    }
}

export default new RobotStore()