import '../../assets/styles/Logo.scss';

import bigRobot from '../../assets/icons/Front Male 1.png';
import smallRobot from '../../assets/icons/Designer Male 1.png';

function Logo() {
    return (
        <div className='logo-grid'>
            <div>
                <h1>
                    Фабрика по производству биороботов
                </h1>
                <div className='sub-title'>
                    класса «монитор-кресло»
                </div>
            </div>
            <div className='robots'>
                <img className='big-robot'
                    src={bigRobot}
                    alt='Big Robot' />
                <div>
                    <div className='circle-behind'>
                </div>
                </div>
                <img className='small-robot'
                    src={smallRobot}
                    alt='Small Robot' />
            </div>
        </div>
    );
}

export default Logo;