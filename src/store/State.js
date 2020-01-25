import Language from '../language/language'
const lang = new Language();

export default {
    lang: lang.local,
    ui: {
        leftMenuItems: [
            {to:'/', icon:'home', active:false, title:'HOME'},
            {to:'/invoice', icon:'clipboard', active:false, title:'INVOICE'},
            {to:'/manage-stuff', icon:'vector', active:false, title:'MANAGE_STAFF'},
            {to:'/create-stuff', icon:'write', active:false, title:'CREATE_STAFF'},
            {to:'/stock', icon:'layout-grid4', active:false, title:'MANAGE_STOCK'},
            {to:'/log', icon:'widget', active:false, title:'CHECK_LOG'},
            {to:'/vehicles', icon:'target', active:false, title:'vehicles'},
        ]
    },
    vehicles: [],
    stocks: []
}