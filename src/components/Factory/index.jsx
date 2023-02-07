import { useEffect, useRef } from 'react';

import { observer } from 'mobx-react-lite';

import FactoryChooser from '../FactoryChooser';
import IconRow from '../IconRow';
import FactoryImage from '../FactoryImage';
import Button from '../Inputs/Button';

import robotStore from '../../store/RobotStore';
import productionStatusStore from '../../store/ProductionStatusStore';

import { productionProsperity } from '../../utils/declination'

import {
    biohandNormal,
    biohandActive,
    biohandDisable,
    chipNormal,
    chipActive,
    chipDisable,
    soulNormal,
    soulActive,
    soulDisable,
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
} from '../../assets/icons'

import '../../assets/styles/Factory.scss';

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

const Factory = observer((props) => {

    useEffect(() => {
        if (typeof robotStore.robotType !== 'undefined' && typeof robotStore.robotStabilizator !== 'undefined') {
            imageHandler();
        }
    }, [robotStore.robotType, robotStore.robotStabilizator, JSON.stringify(props.detailIconRowStores)]);

    const imageHandler = () => {
        let storesStates =
            props.detailIconRowStores.map((item, index) => {
                return item.detailIconState.every(v => v === true)
            })

        productionStatusStore.setProductionStatus(storesStates.every(item => item === true) ? 'normal' : 'disable');
        robotStore.setRobotImage(robots[robotStore.robotType][robotStore.robotStabilizator][productionStatusStore.productionStatus]);
    }

    const producingHandler = () => {
        productionStatusStore.setProductionStatus('active');
        robotStore.setRobotImage(robots[robotStore.robotType][robotStore.robotStabilizator][productionStatusStore.productionStatus]);
    }

    const iconRows = []

    for (let i = 0; i < props.iconRowQuantity; i++) {
        iconRows.push(
            <IconRow
                iconQuantity={props.iconQuantities[i]}
                iconKit={props.iconKits[i]}
                partQuantity={props.partsQuantity[i]}
                detailIconRowStore={props.detailIconRowStores[i]}
            />
        )
    }

    return (
        <section id={props.sectionId} className='factory'>
            <h2>
                Производство
            </h2>
            <div className='factory-items'>
                <div className='factory-item'>
                    <FactoryChooser
                        chooserQuantity={2}
                        title={'Тип биоробота'}
                        firstValue={'FrontEnd'}
                        secondValue={'Design'}
                        chooserIds={['chooser1', 'chooser2']}
                        chooserName={'name1'}
                        chooserHandler={robotStore.setRobotType}
                    />
                    <FactoryChooser
                        chooserQuantity={2}
                        title={'Стабилизатор'}
                        firstValue={'Male'}
                        secondValue={'Female'}
                        chooserIds={['chooser3', 'chooser4']}
                        chooserName={'name2'}
                        chooserHandler={robotStore.setRobotStabilizator}
                    />
                    <Button
                        title={'Произвести за 10 монет'}
                        disabled={productionStatusStore.productionStatus == 'disable' ? true : false}
                        className={'market-button'}
                        onClick={producingHandler}
                    />
                </div>
                <div className='factory-item'>
                    {iconRows}
                    <div className='chooser-label'>
                        {productionProsperity([...props.partsQuantity, props.coinQuantity], [...props.iconQuantities, 10], ['биоруки', 'микрочипа' , 'души' , 'монеты'])}
                    </div>
                </div>
                <div className='factory-item'>
                    <FactoryImage
                        image={robotStore.robotImage}
                        alt={robotStore.robotAlt}
                    />
                </div>
            </div>
        </section>
    );
})

export default Factory;