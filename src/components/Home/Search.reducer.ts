import {GET_LOCATION_DAY_SUCCESS, SearchActions, SET_LOCATION_DAY} from './Search.types';
import {WeatherInfo} from './Day.types';

export type SearchReducerStateType = {
    cityLocationDay: WeatherInfo[],
}
const initialState: SearchReducerStateType = {
    cityLocationDay: [],
};

const SearchReducer = (state: SearchReducerStateType = initialState, action: SearchActions): SearchReducerStateType => {
    switch (action.type) {
        case SET_LOCATION_DAY:
        case GET_LOCATION_DAY_SUCCESS:
            return {
                ...state,
                cityLocationDay: action.cityLocationDay,
            }
        default:
            return state;
    }
}

export default SearchReducer;
