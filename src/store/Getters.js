import Language from '../language/language'
const lang = new Language();

export default {
    getLang: state => state.lang,
    getLeftMenuItems: state => state.ui.leftMenuItems,
    getAllVehicles: state => state.vehicles,
    getVehicle: (state) => (payload) => state.vehicles[payload],
    getStocks: state => state.stocks
}