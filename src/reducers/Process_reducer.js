import { PROCESS_START, PROCESS_UPDATE} from '../constants/ActionTypes'

const initialState = {
  progressId: undefined,
  visits: 0,
  contacts: 0,
  progress: 0,
  jobStatus: "Complete"
};

const progress = (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_START:
      return Object.assign({}, initialState, {
        progressId: action.payload.Data.Id,
        jobStatus: "Running",
      });

    case PROCESS_UPDATE:
      if (action.payload.Data.Id.toString() !== state.progressId.toString()) {
        // Do not update any state from an old update.
        // Update can be old if new process has started
        // and there was a request send before start was recieved.
        return state;
      }
    
      return Object.assign({}, state, {
        contacts: action.payload.Data.CompletedVisitors,
        progress: action.payload.Data.Progress,
        visits: action.payload.Data.CompletedVisits,
        jobStatus: action.payload.Data.JobStatus,
        segments: action.payload.Data.Segments
      });
  }

  return state;
}

export default progress;