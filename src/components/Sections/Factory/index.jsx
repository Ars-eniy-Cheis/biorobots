import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import FactoryChooser from '../../CustomComponents/FactoryChooser';
import IconRow from '../../CustomComponents/IconRow';
import Image from '../../StandardComponents/Image';
import Button from '../../StandardComponents/Inputs/Button';
import ModalWindow from '../../CustomComponents/ModalWindow';

import robotStore from '../../../store/RobotStore';
import productionStatusStore from '../../../store/ProductionStatusStore';

import { productionProsperity } from '../../../utils/declination';

import { robots } from './robots.js';

import '../../../assets/styles/Sections/factory.scss';

const Factory = observer((props) => {

    useEffect(() => {
        if (typeof robotStore.robotType !== 'undefined' && typeof robotStore.robotStabilizator !== 'undefined') {
            imageHandler();
        }
    }, [robotStore.robotType, robotStore.robotStabilizator, JSON.stringify(props.detailIconRowStores)]);

    const imageHandler = () => {
        let storesStates =
            props.detailIconRowStores.map((item, index) => {
                return item.detailIconState.every(v => v === true);
            })
        productionStatusStore.setProductionStatus(storesStates.every(item => item === true) ? 'normal' : 'disable');
        robotStore.setRobotImage(robots[robotStore.robotType][robotStore.robotStabilizator][productionStatusStore.productionStatus]);
    }

    const producingHandler = () => {
        setModalWindowActive(true);
        productionStatusStore.setProductionStatus('active');
        robotStore.setRobotImage(robots[robotStore.robotType][robotStore.robotStabilizator][productionStatusStore.productionStatus]);
    }

    const [modalWindowActive, setModalWindowActive] = useState(false);

    const iconRows = [];

    for (let i = 0; i < props.iconRowQuantity; i++) {
        iconRows.push(
            <IconRow
                iconQuantity={props.iconQuantities[i]}
                iconKit={props.iconKits[i]}
                partQuantity={props.partsQuantity[i]}
                detailIconRowStore={props.detailIconRowStores[i]}
            />
        );
    }

    return (
        <section id={props.sectionId} className='main-grid'>
            <div className='factory-grid-title'>
                <h2>
                    ????????????????????????
                </h2>
            </div>
            <div className='factory-items-grid sub-main-grid'>
                <div className='factory-item-grid-chooser'>
                    <FactoryChooser
                        titleClassName={'chooser-title medium-text'}
                        chooserQuantity={2}
                        title={'?????? ??????????????????'}
                        firstValue={'FrontEnd'}
                        secondValue={'Design'}
                        chooserIds={['chooser1', 'chooser2']}
                        chooserName={'name1'}
                        chooserHandler={robotStore.setRobotType}
                        labelClassName={'chooser-label second-text'}
                        chooserClassName={'chooser'}
                    />
                    <FactoryChooser
                        titleClassName={'chooser-title medium-text'}
                        chooserQuantity={2}
                        title={'????????????????????????'}
                        firstValue={'Male'}
                        secondValue={'Female'}
                        chooserIds={['chooser3', 'chooser4']}
                        chooserName={'name2'}
                        chooserHandler={robotStore.setRobotStabilizator}
                        labelClassName={'chooser-label second-text'}
                        chooserClassName={'chooser'}
                    />
                    <Button
                        title={'???????????????????? ???? 10 ??????????'}
                        disabled={productionStatusStore.productionStatus === 'disable' ? true : false}
                        className={'bordered-button text factory-button'}
                        onClick={producingHandler}
                    />
                </div>
                <div className='factory-item-grid-icons'>
                    {iconRows}
                    <div className='second-text factory-parts-enumeration'>
                        {productionProsperity([...props.partsQuantity, props.coinQuantity], [...props.iconQuantities, 10], ['??????????????', '??????????????????', '????????', '??????????'])}
                    </div>
                </div>
                <div className='factory-item-grid-robot'>
                    <Image
                        src={robotStore.robotImage}
                        alt={robotStore.robotAlt}
                        className={'factory-robot-image'}
                    />
                </div>
            </div>
            <ModalWindow active={modalWindowActive} setActive={setModalWindowActive}>
                <div className='factory-modal-wrap'>
                    <h2 className='modal-window-text modal-window-title'> ???????????????? <br /> ???????????????????? </h2>
                    <h3 className=' modal-window-sub-title modal-window-text'>
                        ??????????????????????!
                        <br />
                        ???? ?????????????????? ??????????????????
                    </h3>
                </div>
           </ModalWindow>
        </section>
    );
})

export default Factory;