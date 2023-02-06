import { useEffect, useRef } from 'react';

import { observer } from 'mobx-react-lite';

import FactoryChooser from '../FactoryChooser';
import IconRow from '../IconRow';
import FactoryImage from '../FactoryImage';

import robotStore from '../../store/RobotStore';
import DetailIconRowStore from '../../store/DetailIconRowStore';

import declination from '../../utils/declination'

import biohandNormal from '../../assets/icons/biohand-normal.png';
import biohandActive from '../../assets/icons/biohand-active.png';
import biohandDisable from '../../assets/icons/biohand-disable.png';

import chipNormal from '../../assets/icons/chip-normal.png';
import chipActive from '../../assets/icons/chip-active.png';
import chipDisable from '../../assets/icons/chip-disable.png';

import soulNormal from '../../assets/icons/soul-normal.png';
import soulActive from '../../assets/icons/soul-normal.png';
import soulDisable from '../../assets/icons/soul-normal.png';

import designFemaleActive from '../../assets/icons/robots/design-female-active.png'
import designFemaleDisable from '../../assets/icons/robots/design-female-disable.png'
import designFemaleNormal from '../../assets/icons/robots/design-female-normal.png'

import designMaleActive from '../../assets/icons/robots/design-male-active.png'
import designMaleDisable from '../../assets/icons/robots/design-male-disable.png'
import designMaleNormal from '../../assets/icons/robots/design-male-normal.png'

import frontEndFemaleActive from '../../assets/icons/robots/front-end-female-active.png'
import frontEndFemaleDisable from '../../assets/icons/robots/front-end-female-disable.png'
import frontEndFemaleNormal from '../../assets/icons/robots/front-end-female-normal.png'

import frontEndMaleActive from '../../assets/icons/robots/front-end-male-active.png'
import frontEndMaleDisable from '../../assets/icons/robots/front-end-male-disable.png'
import frontEndMaleNormal from '../../assets/icons/robots/front-end-male-normal.png'

import '../../assets/styles/Factory.scss';

const Factory = observer((props) => {

    const didMount = useRef(false);
/*
    useEffect(() => {
        if (!didMount.current) {
            for(let i = 0; i < props.iconRowQuantity; i++){
                console.log("mount")
                detailIconRowStore.addRowDetailIconState([]);
                detailIconRowStore.addRowDetailIconImage([]);
            }
        }

    }, []);
*/
    const imageHandler = () => {
        if (typeof robotStore.robotType !== 'undefined' && typeof robotStore.robotStabilizator !== 'undefined') {
            if (robotStore.robotType) {
                if (robotStore.robotStabilizator) {
                    robotStore.setRobotImage(frontEndMaleActive);
                    console.log('image: frontEndMaleActive');
                }
                else {
                    robotStore.setRobotImage(frontEndFemaleActive);
                    console.log('image: frontEndFemaleActive');
                }
            }
            else {
                if (robotStore.robotStabilizator) {
                    robotStore.setRobotImage(designMaleActive);
                    console.log('image: designMaleActive');
                }
                else {
                    robotStore.setRobotImage(designFemaleActive);
                    console.log('image: designFemaleActive');
                }
            }
        }
    }

    useEffect(() => {
        if (typeof robotStore.robotType !== 'undefined' && typeof robotStore.robotStabilizator !== 'undefined') {
            imageHandler();
        }
    }, [robotStore.robotType, robotStore.robotStabilizator]);

    return (
        <div className='factory'>
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
                    <button className='market-button'>Произвести за 10 монет</button>
                </div>
                <div className='factory-item'>
                    <IconRow
                        iconQuantity={4}
                        iconKit={[biohandNormal, biohandActive, biohandDisable]}
                        partQuantity={props.partsQuantity[0]}
                        detailIconRowStore={new DetailIconRowStore()}
                    />
                    <IconRow
                        iconQuantity={4}
                        iconKit={[chipNormal, chipActive, chipDisable]}
                        partQuantity={props.partsQuantity[1]}
                        detailIconRowStore={new DetailIconRowStore()}
                    />
                    <IconRow
                        iconQuantity={1}
                        iconKit={[soulNormal, soulActive, soulDisable]}
                        partQuantity={props.partsQuantity[2]}
                        detailIconRowStore={new DetailIconRowStore()}
                    />
                    <div className='chooser-label'>
                        Для производства робота не хватает
                    </div>
                </div>
                <div className='factory-item'>
                    <FactoryImage
                        image={robotStore.robotImage}
                        alt={robotStore.robotAlt}
                    />
                </div>
            </div>
        </div>
    );
})

export default Factory;