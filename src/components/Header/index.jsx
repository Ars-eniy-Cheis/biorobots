import Button from '../Inputs/Button';

import scrollTo from '../../utils/scrollTo';

import { pacMan } from '../../assets/icons'

import '../../assets/styles/Header.scss';

function Header(props) {

    const clickHandle = () => scrollTo({ id: props.toSection });
    //<img alt='' className='accessorie-empty-image' />
    return (
        <header>
            <div className='header-wrapper'>
                <img src={pacMan} alt='pac-man' className='' />
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