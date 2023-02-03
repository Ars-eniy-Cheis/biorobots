
import { observer } from 'mobx-react-lite';

import declination from '../../utils/declination'

import coin from '../../assets/icons/coin.png';

import '../../assets/styles/Wallet.scss';

const Wallet = observer((props) => {

    const gypsy = () => {
        if (props.gypsyCoinStore.coinQuantity + props.gypsyCoinStore.gypsyingCoins <= props.gypsyCoinStore.maxCoins && props.gypsyCoinStore.isCheked) {
            props.gypsyCoinStore.incrementCoinQuantity(props.gypsyCoinStore.gypsyingCoins)
        }
    }

    let coins = [];

    for (let i = 0; i < props.gypsyCoinStore.coinQuantity; i++) {
        coins.push(<img src={coin} alt='coin' />);
    }

    return (
        <div className='wallet'>
            <h2>
                Кошелёк криптовалют
            </h2>
            <div className='coins'>
                {
                    coins.reverse().map(function (coin) {
                        return (
                            <div className='coin'>{coin}</div>
                        );
                    })
                }
            </div>
            <div className='sub-title'>
                {props.gypsyCoinStore.coinQuantity} biorobo {declination(props.gypsyCoinStore.coinQuantity, ['монета', 'монеты', 'монет'])}
            </div>
            <div>
                <button className='gypsy-button' onClick={gypsy}> Нацыганить </button>
                <input type="checkbox" className='gypsy-checkbox' id="cb2" defaultChecked={props.gypsyCoinStore.isCheked} onChange={() => props.gypsyCoinStore.check()} />
                <label className='gypsy-checkbox-label' htmlFor="cb2">Цыганить по {props.gypsyCoinStore.gypsyingCoins} {declination(props.gypsyCoinStore.gypsyingCoins, ['монете', 'монеты', 'монет'])}
                </label>
            </div>
        </div>
    );
})

export default Wallet;