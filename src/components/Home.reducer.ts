import {CityType, GET_CITY_LIST_SUCCESS, HomeActions, SET_CITY_LIST, SET_IS_LOADING} from './Home.types';

export type HomeReducerStateType = {
    cityList: CityType[],
    isLoading: boolean,
}
const initialState: HomeReducerStateType = {
    cityList: [],
    isLoading: false,
};
const HomeReducer = (state: HomeReducerStateType = initialState, action: HomeActions): HomeReducerStateType => {
    switch (action.type) {
        case SET_CITY_LIST:
        case GET_CITY_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cityList: action.cityList
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default:
            return state;
    }
}

export default HomeReducer
