import {
    QUOTE_CALL_REQUEST,
    QUOTE_CALL_FAILURE,
    QUOTE_CALL_SUCCESS,
} from '../../actions/types'

// reducer with initial state
const initialState = {
    fetching: false,
    kanye: null,
    error: null,
    quotes: [],
};

export function quoteReducer(state = initialState, action) {
    switch (action.type) {
        case QUOTE_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case QUOTE_CALL_SUCCESS:
            return { ...state, fetching: false, kanye: action.kanye };
        case QUOTE_CALL_FAILURE:
        default:
            return state;
    }
}
