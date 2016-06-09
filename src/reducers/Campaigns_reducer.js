import { CAMPAIGNS_GET, CAMPAIGNS_TRAFFIC_UPDATE, CAMPAIGNS_UPDATE } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const defaultState = {
    dataLoaded: false,
    items: [],
    traffic: {
        name: null,
        value: 0
    }
}

const campaigns = (state = defaultState, action) => {
    switch (action.type) {
        case CAMPAIGNS_GET:
            return Object.assign(action.payload.Data, { dataLoaded: true });
            
        case CAMPAIGNS_TRAFFIC_UPDATE:
            let traffic = state.traffic;
            
            traffic.value = action.payload.payload.Data.value;
            
            return Object.assign(state, { traffic });
            
        case CAMPAIGNS_UPDATE:
            let items = [...state.items];
            
            items[action.payload.payload.Data.index].value = action.payloadpayload.Data.value;            
        
            return Object.assign(state, { items } );
    }
    
    return state;
};

export default campaigns;