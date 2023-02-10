import Button from '../../StandardComponents/Inputs/Button';
import Image from '../../StandardComponents/Image';

import scrollTo from '../../../utils/scrollTo';

import { pacMan } from '../../../assets/icons'

import '../../../assets/styles/Sections/header.scss';


const Header = (props) => {
    const clickHandle = () => scrollTo({ id: props.toSection });
    return (
        <header className='main-grid'>
            <div className='header-grid-image'>
                <Image
                    src={pacMan}
                    alt='pac-man-image'
                    className='pac-man-image'
                />
            </div>
            <div className='header-grid-button'>
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