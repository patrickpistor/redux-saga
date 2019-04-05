import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* gifSaga() {
    yield takeLatest("GIF_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchGIF() {
    return axios({
        method: "get",
        url: "http://api.giphy.com/v1/gifs/random?api_key=LZk1F6EqFr5cixBe6TFyNzfmzvLqTPrW&tag=kanye-west&rating=g"
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    console.log('hit');
    try {
        const response = yield call(fetchGIF);
        const gif = response.data.data.fixed_height_downsampled_url;

        const format = gif.substring(gif.indexOf('media/') + 6, gif.indexOf('/200'));
        const url = 'https://i.giphy.com/media/'+format+'/giphy.gif';

        console.log(url);

        // dispatch a success action to the store with the new dog
        yield put({ type: "GIF_CALL_SUCCESS", url });

    } catch (error) {
        console.log(error);
        // dispatch a failure action to the store with the error
        yield put({ type: "GIF_CALL_FAILURE", error });
    }
}
