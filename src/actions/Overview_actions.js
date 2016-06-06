import { OVERVIEW_GET } from '../constants/ActionTypes';

export function getData() {
    const request = fetch('/api/overview').then(x => x.json());
    
    return {
        type: OVERVIEW_GET,
        payload: request
    }
}
