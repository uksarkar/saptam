export default {
    CHANGE_LANGUAGE: (state,payload) => {
        state.lang = payload;
        localStorage.setItem('local',payload);
    },
    SET_ROUTE: (state,payload) => {
      let newList = state.ui.leftMenuItems.map(v => {
        if(v.to === payload || v.to === payload.substring(payload.length-1,0)){
          return {...v, active: true}
        }
        return {...v, active: false};
      });
      state.ui.leftMenuItems = newList;
    }
}