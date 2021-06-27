import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {GET_LOCATION_DAY, GetLocationDayAction} from './Search.types';
import {getLocationDayRequest, getLocationDaySuccess} from './Search.actions';
import {getLocationDayService} from './Search.services';

function* getLocationDay({woeid}: GetLocationDayAction): any {
    try {
        yield put(getLocationDayRequest())
        const response = yield call(getLocationDayService, woeid);
        const consolidatedWeather = response.data.consolidated_weather.slice(0, 5);
        yield put(getLocationDaySuccess(consolidatedWeather));
    } catch (error) {
        // yield put() fail
    }
}

function* searchWatcher() {
    yield takeEvery(GET_LOCATION_DAY, getLocationDay);
}

export default function* SearchSaga() {
    yield all([fork(searchWatcher)]);
}
