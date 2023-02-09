
import { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { declination } from '../../../utils/declination'

import Button from '../../StandardComponents/Inputs/Button';
import CheckBox from '../../StandardComponents/Inputs/CheckBox';
import ModalWindow from '../../CustomComponents/ModalWindow';

import { coin } from '../../../assets/icons'

import '../../../assets/styles/Wallet.scss';

const Wallet = observer((props) => {

    const [modalWindowActive, setModalWindowActive] = useState(false)

    let additionalQuantity = 1;

    if (props.isCheked) {
        additionalQuantity = props.gypsyingCoins;
    }

    const gypsyHandler = () => {
        if (props.coinQuantity + additionalQuantity <= props.maxCoins) {
            if (props.isCheked) {
                props.incrementCoinQuantity(props.gypsyingCoins)
            }
            else {
                props.incrementCoinQuantity(1)
            }
        }
        else {
            setModalWindowActive(true);
        }
    }

    let coins = [];

    for (let i = 0; i < props.coinQuantity; i++) {
        coins.push(
            <div className='coin'>
                <img src={coin} alt='coin' />
            </div>
        )
    }

    return (
        <div className='wallet'>
            <h2>
                Кошелёк криптовалют
            </h2>
            <div className='coins-wrapper'>
                <div className='coins'>
                    {coins}
                </div>
            </div>
            <div className='sub-title'>
                {props.coinQuantity} biorobo {declination(props.coinQuantity, ['монета', 'монеты', 'монет'])}
            </div>
            <div>
                <Button
                    className='gypsy-button'
                    onClick={gypsyHandler}
                    title={'Нацыганить'}
                />
                <CheckBox
                    className={'gypsy-checkbox'}
                    id={'cb2'}
                    defaultChecked={props.isCheked}
                    onChange={props.check}
                    labelClassName={'gypsy-checkbox-label'}
                    value={'Цыганить по' + props.gypsyingCoins + declination(props.gypsyingCoins, ['монете', 'монеты', 'монет'])}
                />
            </div>
            <ModalWindow active={modalWindowActive} setActive={setModalWindowActive}>
                <div className='wallet-modal-wrap'>
                    <img src={coin} alt='coin' className='modal-coin' />
                    <h2 className='modal-window-text modal-window-title'> Количество монет <br /> ограничено </h2>
                    <div>  </div>
                    <h3 className='modal-window-text modal-window-sub-title'>
                        Вы не можете нацыганить
                        <br />
                        более 100 монет biorobo
                    </h3>
                </div>
            </ModalWindow>
        </div>
    );
})

export default Wallet;