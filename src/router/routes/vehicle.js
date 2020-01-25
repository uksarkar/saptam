export default [
    {
        path: '',
        name: 'Vehicles',
        component: () => import(/* webpackChunkName: "pages/vehicle/vehicles" */ '../../pages/vehicle/Vehicle')
    },
    {
        path: 'create',
        name: 'CreateVehicle',
        component: () => import(/* webpackChunkName: "pages/vehicle/create" */ '../../pages/vehicle/Create')
    },
    {
        path: ':id/edit',
        name: 'EditVehicle',
        component: () => import(/* webpackChunkName: "pages/vehicle/edit" */ '../../pages/vehicle/Edit')
    }
]