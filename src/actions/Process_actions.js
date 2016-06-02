import { PROCESS_START, PROCESS_UPDATE } from '../constants/ActionTypes';
import { RESOURCE_PATH_PROCESS } from '../constants/ResourcePaths';

export const start = () => {
  const request = fetch(RESOURCE_PATH_PROCESS, {method: 'post'}).then(x => x.json());
  
  return {
    type: PROCESS_START,
    payload: request
  }
}

export const update = (id) => {
  const request = fetch(`${RESOURCE_PATH_PROCESS}/${id}`).then(x => x.json());
  
  return {
    type: PROCESS_UPDATE,
    payload: request
  }
}



