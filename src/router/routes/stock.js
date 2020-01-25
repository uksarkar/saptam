export default [
    {
        path: '',
        name: 'Stocks',
        component: () => import(/* webpackChunkName: "pages/stock/Stocks" */ '../../pages/stock/Stocks')
    },
    {
        path: 'create',
        name: 'createStock',
        component: () => import(/* webpackChunkName: "pages/stock/create" */ '../../pages/stock/Index')
    }
]