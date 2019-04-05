import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* quoteSaga() {
    yield takeLatest("QUOTE_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchKanye() {
    return axios({
        method: "get",
        url: "https://api.kanye.rest/"
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchKanye);
        const kanye = response.data.quote;

        console.log(kanye);
        // dispatch a success action to the store with the new dog
        yield put({ type: "QUOTE_CALL_SUCCESS", kanye });

    } catch (error) {
        console.log(error);
        // dispatch a failure action to the store with the error
        yield put({ type: "QUOTE_CALL_FAILURE", error });
    }
}
