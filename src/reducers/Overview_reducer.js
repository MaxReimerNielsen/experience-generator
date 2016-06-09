import { OVERVIEW_GET } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const initialState = {
    dataLoaded: false,
    uniqueVisitorsNumber: { value: 0, name:"" },
    generatedVisitsNumber:{value: 0, name:""},
    bounceRate:{value: 0, name:""},
    percentageIdentifiedVisitors:{value: 0, name:""},
    peageviewsPerVisit:{value: 0, name:""},
    timeSpentPerVisit:{value: 0, name:""},
    startDate:{value: 0, name:""},
    endDate:{value: 0, name:""},
    dailyDistribution:[],
    monthlyDistribution:[],
    trafficDistribution:[],
    location:[]
};

const overview = (state = initialState, action) => {
    switch (action.type) {
        case OVERVIEW_GET:
            return Object.assign(action.payload.Data, { dataLoaded: true });

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