
import { observer } from 'mobx-react-lite';

import declination from '../../utils/declination'

import gypsyCoinHandler from '../../store/GypsyCoinHandler';

import coin from '../../assets/icons/coin.png';

import '../../assets/styles/Wallet.scss';


const Wallet = observer(() => {

    let coins = [];

    for (let i = 0; i < gypsyCoinHandler.coinsQuantity; i++) {
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
                {gypsyCoinHandler.coinsQuantity} biorobo {declination(gypsyCoinHandler.coinsQuantity, ['монета', 'монеты', 'монет'])}
            </div>
            <div>
                <button className='gypsy-button' onClick={() => gypsy()}> Нацыганить </button>
                <input type="checkbox" className='gypsy-checkbox' id="cb2" defaultChecked={gypsyCoinHandler.isCheked} onChange={() => gypsyCoinHandler.check()} />
                <label className='gypsy-checkbox-label' htmlFor="cb2">Цыганить по {gypsyCoinHandler.gypsyingCoins} {declination(gypsyCoinHandler.gypsyingCoins, ['монете', 'монеты', 'монет'])}
                </label>
            </div>

        </div>
    );
})

function gypsy() {
    if (gypsyCoinHandler.coinsQuantity + gypsyCoinHandler.gypsyingCoins <= gypsyCoinHandler.maxCoins && gypsyCoinHandler.isCheked) {
        gypsyCoinHandler.increment()
    }
}

export default Wallet;