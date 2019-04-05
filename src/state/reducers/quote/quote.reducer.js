import {
    QUOTE_CALL_REQUEST,
    QUOTE_CALL_FAILURE,
    QUOTE_CALL_SUCCESS,
} from '../../actions/types'

// reducer with initial state
const initialState = {
    fetching: false,
    kanye: null,
    error: null
};

export function quoteReducer(state = initialState, action) {
    switch (action.type) {
        case QUOTE_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case QUOTE_CALL_SUCCESS:
            alert({ ...state, fetching: false, kanye: action.kanye }.kanye)
            return { ...state, fetching: false, kanye: action.kanye };
        case QUOTE_CALL_FAILURE:
        default:
            return state;
    }
}
