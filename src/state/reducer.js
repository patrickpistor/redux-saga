import { 
  QUOTE_CALL_REQUEST, 
  QUOTE_CALL_FAILURE, 
  QUOTE_CALL_SUCCESS,
  GIF_CALL_REQUEST, 
  GIF_CALL_FAILURE, 
  GIF_CALL_SUCCESS,
} from './actions/types'

// reducer with initial state
const initialState = {
  fetching: false,
  fetchingGIF: false,
  kanye: null,
  gif: 'https://i.giphy.com/media/eigd1IVhkUcda/giphy.gif',
  error: null
};

export function reducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case QUOTE_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case QUOTE_CALL_SUCCESS:
      return { ...state, fetching: false, kanye: action.kanye };
    case QUOTE_CALL_FAILURE:
      return { ...state, fetching: false, kanye: null, error: action.error };
    case GIF_CALL_REQUEST:
      return { ...state, fetchingGIF: true, error: null };
    case GIF_CALL_SUCCESS:
      return { ...state, fetchingGIF: false, gif: action.url };
    case GIF_CALL_FAILURE:
      return { ...state, fetchingGIF: false, gif: 'baddy', error: action.error };
    default:
      return state;
  }
}