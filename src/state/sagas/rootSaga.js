import { quoteSaga } from "./quote/getQuote.saga";
import { gifSaga } from "./gif/getGif.saga";
import { fork, all } from 'redux-saga/effects'
import { sagaMiddleware} from "../configureStore";

function* rootSaga () {
    yield all([
        fork(quoteSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(gifSaga),
    ]);
}

export default function startSaga () {
    sagaMiddleware.run(rootSaga)
}
