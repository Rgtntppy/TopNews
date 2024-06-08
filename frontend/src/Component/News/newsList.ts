import { newsListInterface } from "/src/Component/News/newsInterfaces";

export const newsList:newsListInterface[] = [
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