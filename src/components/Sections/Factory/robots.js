import {
    designFemaleActive,
    designFemaleDisable,
    designFemaleNormal,
    designMaleActive,
    designMaleDisable,
    designMaleNormal,
    frontEndFemaleActive,
    frontEndFemaleDisable,
    frontEndFemaleNormal,
    frontEndMaleActive,
    frontEndMaleDisable,
    frontEndMaleNormal,
} from '../../../assets/icons'

const robots = {
    true: {
        true: {
            normal: frontEndMaleNormal,
            disable: frontEndMaleDisable,
            active: frontEndMaleActive,
        },
        false: {
            normal: frontEndFemaleNormal,
            disable: frontEndFemaleDisable,
            active: frontEndFemaleActive,
        }
    },
    false: {
        true: {
            normal: designMaleNormal,
            disable: designMaleDisable,
            active: designMaleActive,
        },
        false: {
            normal: designFemaleNormal,
            disable: designFemaleDisable,
            active: designFemaleActive,
        }
    }
}

export { robots }