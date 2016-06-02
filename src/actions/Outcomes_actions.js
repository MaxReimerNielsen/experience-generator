import { OUTCOMES_GET, OUTCOMES_UPDATE } from '../constants/ActionTypes';
import { RESOURCE_PATH_OUTCOMES } from '../constants/ResourcePaths';

export function update(id, value) {
    return {
        type: OUTCOMES_UPDATE,
        payload: { id, value }
    };
}

export function getData() {
    const request = fetch(RESOURCE_PATH_OUTCOMES).then(x => x.json());

    return {
        type: OUTCOMES_GET,
        payload: request
    };
}