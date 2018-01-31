import _ from 'lodash';
import { FETCH_PIPELINES } from '../actions';
import { FETCH_PIPELINE } from '../actions';
import { FETCH_PIPELINE_RUNS } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_PIPELINES:
      return _.mapKeys(action.payload.data, 'name');
    case FETCH_PIPELINE:
      return { ...state, [action.payload.data.name]: action.payload.data }
    case FETCH_PIPELINE_RUNS:
        return { ...state, "pipelineruns": action.payload.data }
    default:
      return state;
  }
}