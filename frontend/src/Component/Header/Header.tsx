import 'src/Component/Header/header.scss';
import { useState } from 'react';
import HeaderMenu from 'src/Component/Header/HeaderMenu';
import HamburgerMenu from 'src/Component/Header/Hamburger/HamburgerMenu';

const Header = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

    return (
        <div className='header'>
            <h1 className='title'>the top trends</h1>
            <HamburgerMenu selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex} />
            <HeaderMenu selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex} />
        </div>
    );
};

export default Header;