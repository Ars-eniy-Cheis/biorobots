import Button from '../../StandardComponents/Inputs/Button';
import Image from '../../StandardComponents/Image';

import scrollTo from '../../../utils/scrollTo';

import { pacMan } from '../../../assets/icons';

import '../../../assets/styles/Sections/header.scss';

const Header = (props) => {
    const clickHandle = () => scrollTo({ id: props.toSection });
    return (
        <header>
            <div className='header-wrapper'>
                <Image
                    src={pacMan}
                    alt='pac-man-image'
                    className=''
                />
                <Button
                    className='text bordered-button header-button'
                    title='Произвести биоробота'
                    onClick={clickHandle}
                />
            </div>
        </header>
    );
}

export default Header;