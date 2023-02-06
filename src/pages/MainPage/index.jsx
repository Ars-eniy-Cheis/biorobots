import { observer } from 'mobx-react-lite';

import Header from '../../components/Header'
import Logo from '../../components/Logo'
import Wallet from '../../components/Wallet'
import AccessorieRow from '../../components/AccessorieRow'
import Factory from '../../components/Factory';

import gypsyCoinStore from '../../store/GypsyCoinStore';
import storageStore from '../../store/StorageStore';

import biohand from '../../assets/icons/biohand.png';
import chip from '../../assets/icons/chip.png';
import soul from '../../assets/icons/soul.png';

import '../../assets/styles/MainPage.scss';
import '../../assets/styles/Common.scss';

/*
Вынести в отдельный компонент:

1) Чек-бокс
2) Кнопку
3) Радио-баттан
4) Картинку
5) Картинку на фабрике

Изменить отображение: 
1) Пак-мана
2) Чек-бокса
3) Радио-баттана

Наложить логику на:
1) Чек-бокс и кнопку нацыганивания монет
2) Радио-баттоны
3) Иконки на фабрике
4) Картинку робота на фабрике

Создать функци:
1) Выдающую текст, в зависимости от того, каких компонентов не хватает

в css объеденить все повторяющиеся элементы

В проверить всё ещё раз и зарефакторить при необходимости
*/

const MainPage = observer((props) => {

  let accessoriesQuantityInRow = 3;

  const buyHandler = (price, quantity, changer) => {
    if (gypsyCoinStore.coinQuantity - price >= 0) {
      changer();
      gypsyCoinStore.decrementCoinQuantity(price);
    }
  }

  const sellHandler = (price, quantity, changer) => {
    if (gypsyCoinStore.coinQuantity + price <= 100 && quantity > 0) {
      changer();
      gypsyCoinStore.incrementCoinQuantity(price);
    }
  }

  return (
    <div className='main-page'>
      <Header />
      <div className='body-wrap'>
        <Logo />
        <Wallet
          gypsyCoinStore={gypsyCoinStore}
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
            buttonHandlers={[[buyHandler, storageStore.incrementBiohandQuantity], [buyHandler, storageStore.incrementChipQuantity], [buyHandler, storageStore.incrementSoulQuantity]]}
            accessorieNames={['Биорука', 'Микрочип', 'Душа']}
            accessoriePrices={[storageStore.biohandBuyPrice, storageStore.chipBuyPrice, storageStore.soulBuyPrice]}
          />
          <AccessorieRow
            rowName={'Склад'}
            quantity={accessoriesQuantityInRow}
            pictures={[{}, {}, {}]}
            picturesAlt={['Biohand', 'Chip', 'Soul']}
            accessorieNameStyles={['accessorie-name', 'accessorie-name', 'accessorie-name']}
            accessoriePriceStyles={['accessorie-price', 'accessorie-price', 'accessorie-price']}
            accessoriesQuantity={[storageStore.biohandQuantity, storageStore.chipQuantity, storageStore.soulQuantity]}
            buttonStyles={['storage-button', 'storage-button', 'storage-button']}
            buttonActionsNames={['Продать', 'Продать', 'Продать']}
            buttonHandlers={[[sellHandler, storageStore.decrementBiohandQuantity], [sellHandler, storageStore.decrementChipQuantity], [sellHandler, storageStore.decrementSoulQuantity]]}
            accessorieNames={['Биорука', 'Микрочип', 'Душа']}
            accessoriePrices={[storageStore.biohandSellPrice, storageStore.chipSellPrice, storageStore.soulSellPrice]}
          />
        </div>
        <Factory
          partsQuantity={[storageStore.biohandQuantity, storageStore.chipQuantity, storageStore.soulQuantity]}
          iconRowQuantity={3}
        />
      </div>
    </div>
  );
})

export default MainPage
