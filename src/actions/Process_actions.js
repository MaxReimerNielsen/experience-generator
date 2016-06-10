import { PROCESS_START, PROCESS_UPDATE } from '../constants/ActionTypes';
import { RESOURCE_PATH_START_JOB, RESOURCE_PATH_UPDATE_JOB } from '../constants/ResourcePaths';

export const start = () => {
  const request = fetch(RESOURCE_PATH_START_JOB, {method: 'post'}).then(x => x.json());
  
  return {
    type: PROCESS_START,
    payload: request
  }
}

export const update = (id) => {
  const url = RESOURCE_PATH_UPDATE_JOB.replace('{id}', '{' + id + '}');
  const request = fetch(url).then(x => x.json());
  
  return {
    type: PROCESS_UPDATE,
    payload: request
  }
}



