import { useContext, useCallback } from 'react';
import { propsContext } from 'src/App';

interface NewsProps {
    title:   string;
    tailFetchUrl: string;
}

const HeaderMenu: React.FC<NewsProps> = ({ title, tailFetchUrl }) => {
    const { setTitle } = useContext(propsContext)!;
    const { setTailFetchUrl } = useContext(propsContext)!;
    const handleClick = useCallback(() => {
        console.log(title+'がクリックされました');
        setTitle(title);
        setTailFetchUrl(tailFetchUrl);
    },[title, tailFetchUrl, setTailFetchUrl]);

    return (
        <li>
            <button onClick={ handleClick }>
                { title }
            </button>
        </li>
    );
};

export default HeaderMenu;