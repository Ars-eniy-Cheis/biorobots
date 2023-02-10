import { observer } from 'mobx-react-lite';

import Header from '../../components/Sections/Header';
import Logo from '../../components/Sections/Logo';
import Wallet from '../../components/Sections/Wallet';
import AccessorieRow from '../../components/Sections/AccessorieRow';
import Factory from '../../components/Sections/Factory';

import gypsyCoinStore from '../../store/GypsyCoinStore';
import storageStore from '../../store/StorageStore';
import DetailIconRowStore from '../../store/DetailIconRowStore';

import {
  biohand,
  chip,
  soul,
  biohandNormal,
  biohandActive,
  biohandDisable,
  chipNormal,
  chipActive,
  chipDisable,
  soulNormal,
  soulActive,
  soulDisable,
} from '../../assets/icons';

import '../../assets/styles/Pages/mainPage.scss';

const sections = ["header", "logo", "wallet", "market", "storage", "factory"];

const MainPage = observer((props) => {

  let accessoriesQuantityInRow = 3;
  let iconRowQuantity = 3;

  let detailIconRowStores = [];
  for (let i = 0; i < iconRowQuantity; i++) {
    detailIconRowStores.push(new DetailIconRowStore());
  }

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
      <Header
        toSection={'factory'}
      />
      <div className='body-wrap'>
        <Logo
          sectionId={sections[1]}
        />
        <Wallet
          sectionId={sections[2]}
          maxCoins={gypsyCoinStore.maxCoins}
          coinQuantity={gypsyCoinStore.coinQuantity}
          gypsyingCoins={gypsyCoinStore.gypsyingCoins}
          isCheked={gypsyCoinStore.isCheked}
          incrementCoinQuantity={gypsyCoinStore.incrementCoinQuantity}
          decrementCoinQuantity={gypsyCoinStore.decrementCoinQuantity}
          check={gypsyCoinStore.check}
        />
        <AccessorieRow
          sectionId={sections[3]}
          rowName={'Рынок комплектующих'}
          quantity={accessoriesQuantityInRow}
          pictures={[biohand, chip, soul]}
          picturesAlt={['Biohand', 'Chip', 'Soul']}
          accessorieNameStyles={['accessorie-name info-text', 'accessorie-name info-text', 'accessorie-name info-text']}
          accessoriePriceStyles={['accessorie-price text', 'accessorie-price text', 'accessorie-price text']}
          accessoriesQuantity={[{}, {}, {}]}
          buttonStyles={['text bordered-button market-button', 'text bordered-button market-button', 'text bordered-button market-button']}
          buttonActionsNames={['Установить', 'Установить', 'Установить']}
          buttonHandlers={[[buyHandler, storageStore.incrementBiohandQuantity], [buyHandler, storageStore.incrementChipQuantity], [buyHandler, storageStore.incrementSoulQuantity]]}
          accessorieNames={['Биорука', 'Микрочип', 'Душа']}
          accessoriePrices={[storageStore.biohandBuyPrice, storageStore.chipBuyPrice, storageStore.soulBuyPrice]}
          gridColumnStart={2}
        />
        <AccessorieRow
          sectionId={sections[4]}
          rowName={'Склад'}
          quantity={accessoriesQuantityInRow}
          pictures={[{}, {}, {}]}
          picturesAlt={['Biohand', 'Chip', 'Soul']}
          accessorieNameStyles={['accessorie-name info-text', 'accessorie-name info-text', 'accessorie-name info-text']}
          accessoriePriceStyles={['accessorie-price text', 'accessorie-price text', 'accessorie-price text']}
          accessoriesQuantity={[storageStore.biohandQuantity, storageStore.chipQuantity, storageStore.soulQuantity]}
          buttonStyles={['text bordered-button  storage-button', 'text bordered-button storage-button', 'text bordered-button storage-button']}
          buttonActionsNames={['Продать', 'Продать', 'Продать']}
          buttonHandlers={[[sellHandler, storageStore.decrementBiohandQuantity], [sellHandler, storageStore.decrementChipQuantity], [sellHandler, storageStore.decrementSoulQuantity]]}
          accessorieNames={['Биорука', 'Микрочип', 'Душа']}
          accessoriePrices={[storageStore.biohandSellPrice, storageStore.chipSellPrice, storageStore.soulSellPrice]}
          gridColumnStart={2}
        />
        <Factory
          sectionId={sections[5]}
          partsQuantity={[storageStore.biohandQuantity, storageStore.chipQuantity, storageStore.soulQuantity]}
          iconRowQuantity={3}
          iconKits={[[biohandNormal, biohandActive, biohandDisable], [chipNormal, chipActive, chipDisable], [soulNormal, soulActive, soulDisable]]}
          detailIconRowStores={detailIconRowStores}
          iconQuantities={[4, 4, 1]}
          coinQuantity={gypsyCoinStore.coinQuantity}
        />
      </div>
    </div>
  );
})

export default MainPage;
