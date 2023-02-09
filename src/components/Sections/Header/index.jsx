import Button from '../../StandardComponents/Inputs/Button';
import Image from '../../StandardComponents/Image';

import scrollTo from '../../../utils/scrollTo';

import { pacMan } from '../../../assets/icons'

import '../../../assets/styles/Header.scss';

const Header = (props) => {
    const clickHandle = () => scrollTo({ id: props.toSection });
    return (
        <header>
            <div className='header-wrapper'>
                <Image
                    src={pacMan}
                    alt='pac-man'
                    className=''
                />
                <Button
                    className='header-button'
                    title='Произвести биоробота'
                    onClick={clickHandle}
                />
            </div>
        </header>
    );
}

export default Header;