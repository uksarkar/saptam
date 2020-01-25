export default [
    {
        path: '',
        name: 'Invoice',
        component: () => import(/* webpackChunkName: "pages/invoice/create" */ '../../pages/invoice/Invoice')
    },
    {
        path: 'create',
        name: 'createInvoice',
        component: () => import(/* webpackChunkName: "pages/invoice/create" */ '../../pages/invoice/Invoice')
    }
]