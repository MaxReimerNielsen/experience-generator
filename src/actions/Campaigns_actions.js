import { CAMPAIGNS_GET, CAMPAIGNS_TRAFFIC_UPDATE, CAMPAIGNS_UPDATE } from '../constants/ActionTypes';
import { RESOURCE_PATH_CAMPAIGNS } from '../constants/ResourcePaths';

export function getData() {
    const request = fetch(RESOURCE_PATH_CAMPAIGNS).then(x => x.json());
    
    return {
        type: CAMPAIGNS_GET,
        payload: request
    }
}

export function updateCampaigns(index, event, value) {
    return {
        type: CAMPAIGNS_UPDATE,
        payload: {
            index,
            value
        }
    }
}

export function updateCampaignTraffic(event, value) {
    return {
        type: CAMPAIGNS_TRAFFIC_UPDATE,
        payload: {
            value
        }
    }
}