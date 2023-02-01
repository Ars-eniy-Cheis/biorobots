
import { observer } from 'mobx-react-lite';

import gypsyCoin from '../../store/gypsyCoin';

import coin from '../../assets/icons/coin.png';

import '../../assets/styles/Wallet.scss';


const Wallet = observer(() => {

    let maxCoins = 100;

    let coins = [];

    const gypsy = () => {
        if (gypsyCoin.coinsQuantity + gypsyCoin.gypsyingCoins < maxCoins && gypsyCoin.isCheked) {
            gypsyCoin.increment()
        }
    }

    const coinsDeclination = (coinsQuantity) => {
        let lastDigit = coinsQuantity % 10;
        if (lastDigit >= 2 && lastDigit % 10 <= 4)
            return 'монеты'
        else if (lastDigit % 10 >= 5 || lastDigit % 10 == 0)
            return 'монет'
        return 'монета'
    }

    for (let i = 0; i < gypsyCoin.coinsQuantity; i++) {
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
                {gypsyCoin.coinsQuantity} biorobo {coinsDeclination(gypsyCoin.coinsQuantity)}
            </div>
            <div>
                <button className='gypsy-button' onClick={() => gypsy()}> Нацыганить </button>
                <input type="checkbox" className='gypsy-checkbox' id="cb2" onChange={() => gypsyCoin.check()} />
                <label className='gypsy-checkbox-label' htmlFor="cb2">Цыганить по {gypsyCoin.gypsyingCoins} {coinsDeclination(gypsyCoin.gypsyingCoins)}
                </label>
            </div>

        </div>
    );
})

export default Wallet;