import { useContext, useCallback, MouseEventHandler } from 'react';
import { propsContext } from 'src/App';
import { newsList } from 'src/Component/News/newsList'

const HeaderMenu: React.FC = () => {
    const { setTailFetchUrl } = useContext(propsContext)!;

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        const index = parseInt(event.currentTarget.dataset.index || '0',10);
        const newsItem = newsList[index];
        console.log(newsItem.menuTitle+'がクリックされました');
        setTailFetchUrl(newsItem.tailFetchUrl);
    },[ setTailFetchUrl ]);

    return (
        <nav className='pcOnly'>
            <ul>
                {newsList.map((newsItem, index) => (
                <button
                key={ index }
                onClick={ handleClick }
                data-index={index}
                >
                    <li key={ newsItem.tailFetchUrl }>
                        { newsItem.menuTitle }
                    </li>
                </button>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderMenu;