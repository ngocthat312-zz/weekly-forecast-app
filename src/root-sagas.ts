import {all, fork} from 'redux-saga/effects';
import HomeSaga from './components/Home.sagas';
import SearchSaga from './components/Home/Search.sagas';

const RootSagas = function* () {
    yield all([
        fork(HomeSaga),
        fork(SearchSaga),
    ]);
}

export default RootSagas
