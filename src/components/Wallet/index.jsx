
import { observer } from 'mobx-react-lite';

import declination from '../../utils/declination'

import coin from '../../assets/icons/coin.png';

import '../../assets/styles/Wallet.scss';

const Wallet = observer((props) => {

    const gypsy = () => {
        if (props.gypsyCoinHandler.coinsQuantity + props.gypsyCoinHandler.gypsyingCoins <= props.gypsyCoinHandler.maxCoins && props.gypsyCoinHandler.isCheked) {
            props.gypsyCoinHandler.increment(props.gypsyCoinHandler.gypsyingCoins)
        }
    }

    let coins = [];

    for (let i = 0; i < props.gypsyCoinHandler.coinsQuantity; i++) {
        coins.push(<img src={coin} alt='coin' className='coin' />);
    }

    return (
        <div className='wallet'>
            <h2>
                Кошелёк криптовалют
            </h2>
            <div className='coins'>
                {coins}
            </div>
            <div className='sub-title'>
                {props.gypsyCoinHandler.coinsQuantity} biorobo {declination(props.gypsyCoinHandler.coinsQuantity, ['монета', 'монеты', 'монет'])}
            </div>
            <div>
                <button className='gypsy-button' onClick={gypsy}> Нацыганить </button>
                <input type="checkbox" className='gypsy-checkbox' id="cb2" defaultChecked={props.gypsyCoinHandler.isCheked} onChange={() => props.gypsyCoinHandler.check()} />
                <label className='gypsy-checkbox-label' htmlFor="cb2">Цыганить по {props.gypsyCoinHandler.gypsyingCoins} {declination(props.gypsyCoinHandler.gypsyingCoins, ['монете', 'монеты', 'монет'])}
                </label>
            </div>

        </div>
    );
})

export default Wallet;