import { OVERVIEW_GET } from '../constants/ActionTypes';
import { RESOURCE_PATH_OVERVIEW } from '../constants/ResourcePaths';

export function getData() {
    const request = fetch(RESOURCE_PATH_OVERVIEW).then(x => x.json());
    
    return {
        type: OVERVIEW_GET,
        payload: request
    }
}
