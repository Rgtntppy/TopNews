import 'src/Component/Header/Header.scss';
import HeaderMenu from 'src/Component/Header/HeaderMenu';
import HamburgerMenu from 'src/Component/Header/Hamburger/HamburgerMenu';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='headerTitle'>NewsSite</h1>
            <HamburgerMenu/>
            <HeaderMenu/>
        </div>
    );
};

export default Header;