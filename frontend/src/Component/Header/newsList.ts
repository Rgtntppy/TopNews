import { NewsListInterface } from 'src/Component/News/newsInterfaces';

export const newsList:NewsListInterface[] = [
    {
        menuTitle: 'TOP',
        tailFetchUrl:'/topstories.json?print=pretty',
    },
    {
        menuTitle: 'NEW',
        tailFetchUrl: '/newstories.json?print=pretty',
    },
    {
        menuTitle: 'BEST',
        tailFetchUrl: '/beststories.json?print=pretty',
    }
];

// 以前使ってたやつ
// /item/8863.json?print=pretty
// /item/126809.json?print=pretty