import { API_CALL_REQUEST, API_CALL_FAILURE, API_CALL_SUCCESS } from './actions/types'

// reducer with initial state
const initialState = {
  fetching: false,
  kanye: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, kanye: action.kanye };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, kanye: null, error: action.error };
    default:
      return state;
  }
}