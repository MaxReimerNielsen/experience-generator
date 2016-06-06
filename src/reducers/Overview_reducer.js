import { OVERVIEW_GET } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const initialState={
 dataLoaded: false,
 uniqueVisitorsNumber:{value:150},
 overViewData:[]    
};

const overview = (state=initialState, action) => {
    switch (action.type) {
        case OVERVIEW_GET:
            return Object.assign(action.payload, { dataLoaded: true });
            
        // case CAMPAIGNS_TRAFFIC_UPDATE:
        //     let traffic = state.traffic;
            
        //     traffic.value = action.payload.value;
            
        //     return Object.assign(state, { traffic });
            
        // case CAMPAIGNS_UPDATE:
        //     let items = [...state.items];
            
        //     items[action.payload.index].value = action.payload.value;            
        
        //     return Object.assign(state, { items } );
    }
    return state;
}


export default overview;