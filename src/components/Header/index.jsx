import '../../assets/styles/Header.scss';
import '../../assets/styles/HeaderButton.scss'

function Header() {
    return (
        <header>
            <div className='header-wrapper'>
                <div className='pac-man-logo'>
                    <div className='pac-man' />
                    <div className='dot' />
                    <div className='dot' />
                    <div className='dot' />
                </div>
                <button className='header-button'> Произвести биоробота </button>
            </div>
        </header>
    );
}

export default Header;