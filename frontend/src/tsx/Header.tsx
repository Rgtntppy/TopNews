import HeaderMenu from 'src/tsx/HeaderMenu';

const newsList = [
    {
        title: 'TOP',
        tailFetchUrl: '/maxitem.json?print=pretty',
    },
    {
        title : 'My YC app: Dropbox - Throw away your USB drive',
        by : 'dhouston',
        descendants : 71,
        id : 8863,
        kids : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        score : 111,
        time : 1175714200,
        type : 'story',
        url : 'http://www.getdropbox.com/u/2/screencast.html',
        tailFetchUrl:'/item/8863.json?print=pretty'
    },
    {
        title: 'NEW',
        tailFetchUrl: '',
    },
    {
        title: 'BEST',
        tailFetchUrl: '/topstories.json?print=pretty',
    }
];

const Header = () => {
    return (
        <>
        <h1 className='headerTitle'>NewsSite</h1>
        <nav>
            <ul>
                {newsList.map(newsList => (
                <HeaderMenu
                title={ newsList.title }
                tailFetchUrl={ newsList.tailFetchUrl }
                />
                ))}
            </ul>
        </nav>
        </>
    );
};

export default Header;