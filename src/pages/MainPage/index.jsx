import Header from '../../components/Header'

import '../../assets/styles/MainPage.scss';

function MainPage() {

  const brs = [];
  for (let i = 0; i < 100; i++) {
    brs.push(<br />);
  }

  return (
    <div className="App">
      <Header />
      <ul>{brs}</ul>
    </div>
  );
}

export default MainPage;
