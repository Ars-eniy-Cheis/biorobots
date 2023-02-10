import Image from '../../StandardComponents/Image';

import '../../../assets/styles/Sections/logo.scss';

import { logo } from '../../../assets/icons';

const Logo = () => {
    return (
        <section className='grid logo-grid'>
            <div>
                <h1>
                    Фабрика по производству биороботов
                </h1>
                <h3>
                    класса «монитор-кресло»
                </h3>
            </div>
            <div className='logo-image-wraper'>
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