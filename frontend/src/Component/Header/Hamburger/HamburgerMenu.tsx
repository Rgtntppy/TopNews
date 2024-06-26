import 'src/Component/Header/Hamburger/hamburger.scss';
import React, { useState, useContext, useCallback, MouseEventHandler } from 'react';
import { propsContext } from 'src/App';
import { newsList } from 'src/Component/Header/newsList';
import { HeaderTabProps } from 'src/Component/Header/headerInterface';

const HamburgerMenu: React.FC<HeaderTabProps> = ({ selectedTabIndex, setSelectedTabIndex }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setTailFetchUrl } = useContext(propsContext)!;
    
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        const index = parseInt(event.currentTarget.dataset.index || '0',10);
        const newsItem = newsList[index];
        console.log(newsItem.menuTitle+'がクリックされました');
        setTailFetchUrl(newsItem.tailFetchUrl);
        setIsOpen(!isOpen);
        setSelectedTabIndex(index);
    },[ setTailFetchUrl, isOpen ]);

    const toggleMenu = useCallback (() => {
        setIsOpen(!isOpen);
    },[ isOpen ]);

    return (
        <div className='hamburgerMenu'>
            {/* ハンバーガーボタン */}
            <button className={`hamburgerIcon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </button>
            
            {/* メニュー */}
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {newsList.map((newsItem, index) => (
                        <button
                        key={ index }
                        onClick={ handleClick }
                        data-index={index}
                        className={ selectedTabIndex === index ? 'active' : '' }
                        >
                            <li key={ index }>
                                { newsItem.menuTitle }
                            </li>
                        </button>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;