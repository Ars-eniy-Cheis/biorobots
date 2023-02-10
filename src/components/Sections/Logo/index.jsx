import Image from '../../StandardComponents/Image';

import '../../../assets/styles/Sections/logo.scss';

import { logo } from '../../../assets/icons';

const Logo = () => {
    return (
        <section className='main-grid'>
            <div className='logo-grid-title'>
                <h1>
                    Фабрика по производству биороботов
                </h1>
                <h3>
                    класса «монитор-кресло»
                </h3>
            </div>
            <div className='logo-grid-image'>
                <Image
                    className='logo-image'
                    src={logo}
                    alt='Logo'
                />
            </div>
        </section>
    );
}

export default Logo;