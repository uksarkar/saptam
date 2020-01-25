export default {
    CREATE_VEHICLE: ({commit,state}, payload) => {
        state.vehicles.push(payload);
    },
    EDIT_VEHICLE: ({commit,state},{payload,id}) => {
        state.vehicles[id] = payload;
    },
    DELETE_VEHICLE: ({commit,state},id) => {
        state.vehicles = state.vehicles.filter((v,i) => i !== id);
    }
}