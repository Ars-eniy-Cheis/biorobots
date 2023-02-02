import Header from '../../components/Header'
import Logo from '../../components/Logo'
import Wallet from '../../components/Wallet'
import AccessorieRow from '../../components/AccessorieRow'

import gypsyCoinHandler from '../../store/GypsyCoinHandler';
import storage from '../../store/Storage';

import biohand from '../../assets/icons/biohand.png';
import chip from '../../assets/icons/chip.png';
import soul from '../../assets/icons/soul.png';

import '../../assets/styles/MainPage.scss';
import '../../assets/styles/Common.scss';
import { observer } from 'mobx-react-lite';

const MainPage = observer((props) => {

  let accessoriesQuantityInRow = 3;

  const buyHandler = (price, quantity, changer) => {
    if (gypsyCoinHandler.coinsQuantity - price > 0) {
      changer()
      gypsyCoinHandler.decrement(price);
    }
  }

  const sellHandler = (price, quantity, changer) => {
    if (gypsyCoinHandler.coinsQuantity + price < 100 && quantity > 0) {
      changer()
      gypsyCoinHandler.increment(price);
    }
  }

  return (
    <div className='main-page'>
      <Header />
      <div className='body-wrap'>
        <Logo />
        <Wallet
          gypsyCoinHandler={gypsyCoinHandler}
        />
        <div>
          <AccessorieRow
            rowName={'Рынок комплектующих'}
            quantity={accessoriesQuantityInRow}
            pictures={[biohand, chip, soul]}
            picturesAlt={['Biohand', 'Chip', 'Soul']}
            accessorieNameStyles={['accessorie-name', 'accessorie-name', 'accessorie-name']}
            accessoriePriceStyles={['accessorie-price', 'accessorie-price', 'accessorie-price']}
            accessoriesQuantity={[{}, {}, {}]}
            buttonStyles={['market-button', 'market-button', 'market-button']}
            buttonActionsNames={['Установить', 'Установить', 'Установить']}
            buttonHandlers={[[buyHandler, storage.incrementBiohandQuantity], [buyHandler, storage.incrementChipQuantity], [buyHandler, storage.incrementSoulQuantity]]}
            accessorieNames={['Биорука', 'Микрочип', 'Душа']}
            accessoriePrices={[storage.biohandBuyPrice, storage.chipBuyPrice, storage.soulBuyPrice]}
          />
          <AccessorieRow
            rowName={'Склад'}
            quantity={accessoriesQuantityInRow}
            pictures={[{}, {}, {}]}
            picturesAlt={['Biohand', 'Chip', 'Soul']}
            accessorieNameStyles={['accessorie-name', 'accessorie-name', 'accessorie-name']}
            accessoriePriceStyles={['accessorie-price', 'accessorie-price', 'accessorie-price']}
            accessoriesQuantity={[storage.biohandQuantity, storage.chipQuantity, storage.soulQuantity]}
            buttonStyles={['storage-button', 'storage-button', 'storage-button']}
            buttonActionsNames={['Продать', 'Продать', 'Продать']}
            buttonHandlers={[[sellHandler, storage.decrementBiohandQuantity], [sellHandler, storage.decrementChipQuantity], [sellHandler, storage.decrementSoulQuantity]]}
            accessorieNames={['Биорука', 'Микрочип', 'Душа']}
            accessoriePrices={[storage.biohandSellPrice, storage.chipSellPrice, storage.soulSellPrice]}
          />
        </div>
      </div>
    </div>
  );
})

export default MainPage
