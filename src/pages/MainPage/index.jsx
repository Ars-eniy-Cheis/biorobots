import Header from '../../components/Header'
import Logo from '../../components/Logo'
import Wallet from '../../components/Wallet'

import '../../assets/styles/MainPage.scss';

function MainPage() {

  const brs = [];
  for (let i = 0; i < 100; i++) {
    brs.push(<br />);
  }

  return (
    <div className='main-page'>
      <Header />
      <div className='body-wrap'>
        <Logo />
        <Wallet />
      </div>
      <ul>{brs}</ul>
    </div>
  );
}

export default MainPage;
