// This is the root reducer and the root selector
import { combineReducers } from "redux";
import { quoteReducer } from "./quote/quote.reducer";
import { gifReducer } from "./gif/gif.reducer";

export default combineReducers({
    quoteReducer, gifReducer
})
