import { Route } from '@/types';
import webApiImpl from './web-api/search';

export const route: Route = {
    path: '/keyword/:keyword/:routeParams?',
    categories: ['social-media'],
    example: '/twitter/keyword/RSSHub',
    parameters: { keyword: 'keyword', routeParams: 'extra parameters, see the table above' },
    features: {
        requireConfig: ['TWITTER_USERNAME', 'TWITTER_PASSWORD'],
        requirePuppeteer: false,
        antiCrawler: false,
        supportBT: false,
        supportPodcast: false,
        supportScihub: false,
    },
    name: 'Keyword',
    maintainers: ['DIYgod', 'yindaheng98', 'Rongronggg9'],
    handler,
};

async function handler(ctx) {
    return await webApiImpl(ctx);
}