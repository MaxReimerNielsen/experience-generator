import { DASHBOARD_GET} from '../constants/ActionTypes'
import { combineReducers } from 'redux';

const dashboardInitState = 
    {
        visitsPerChannel:[],
        monthlyDistribution:[]
    }

const chartsData = (state = dashboardInitState, action) => {
    switch (action.type) {
        case DASHBOARD_GET:
            return action.payload.Data.chartsData;                    
    }
    
    return state;
}

export default combineReducers( {chartsData} );