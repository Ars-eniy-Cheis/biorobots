import Button from '../Inputs/Button';

import scrollTo from '../../utils/scrollTo';

import '../../assets/styles/Header.scss';
import '../../assets/styles/HeaderButton.scss'

function Header(props) {

    const clickHandle = () => scrollTo({ id: props.toSection });
    return (
        <header>
            <div className='header-wrapper'>
                <div className='pac-man-logo'>
                    <div className='pac-man' />
                    <div className='dot' />
                    <div className='dot' />
                    <div className='dot' />
                </div>
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