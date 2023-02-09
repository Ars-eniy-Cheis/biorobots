import Image from '../../StandardComponents/Image'

import '../../../assets/styles/Logo.scss';

import { logo } from '../../../assets/icons'

const Logo = () => {
    return (
        <section className='logo-grid'>
            <div>
                <h1>
                    Фабрика по производству биороботов
                </h1>
                <div className='sub-title'>
                    класса «монитор-кресло»
                </div>
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