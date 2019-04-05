import {
    GIF_CALL_REQUEST,
    GIF_CALL_FAILURE,
    GIF_CALL_SUCCESS,
} from '../../actions/types'

// reducer with initial state
const initialState = {
    fetchingGIF: false,
    gif: 'https://i.giphy.com/media/eigd1IVhkUcda/giphy.gif',
    error: null
};

export function gifReducer(state = initialState, action) {
    switch (action.type) {
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
