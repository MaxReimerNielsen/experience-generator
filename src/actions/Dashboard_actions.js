import { DASHBOARD_GET } from '../constants/ActionTypes';
import { RESOURCE_PATH_DASHBOARD } from '../constants/ResourcePaths';


export function getChartsData(id, value) {    
    const request = fetch(RESOURCE_PATH_DASHBOARD).then(x => x.json());
    
    return {
        type: DASHBOARD_GET,
        payload: request
    };
}