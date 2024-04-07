interface newsList {
    menuTitle: string;
    tailFetchUrl: string;
}

export const newsList:newsList[] = [
    {
        menuTitle: 'TOP',
        tailFetchUrl:'/item/8863.json?print=pretty',
    },
    {
        menuTitle: 'NEW',
        tailFetchUrl: '/topstories.json?print=pretty',
    },
    {
        menuTitle: 'BEST',
        tailFetchUrl: '/item/126809.json?print=pretty',
    },
];

// export default newsList;