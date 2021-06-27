import {all, call, fork, put, takeEvery} from 'redux-saga/effects'
import {searchCityService} from './Home.services';
import {CityType, GET_CITY_LIST, GetCityListAction} from './Home.types';
import {getCityListSuccess, searchCityRequest} from './Home.actions';

function* searchCity({cityText}: GetCityListAction): any {
    try {
        yield put(searchCityRequest())
        const response = yield call(searchCityService, cityText);
        const sortedData = response.data.sort((a: CityType, b: CityType) => a.title.localeCompare(b.title));
        yield put(getCityListSuccess(sortedData));
    } catch (error) {
        // yield put() fail
    }
}

function* homeWatcher() {
    yield takeEvery(GET_CITY_LIST, searchCity);
}

export default function* HomeSaga() {
    yield all([
        fork(homeWatcher)
    ]);
}
