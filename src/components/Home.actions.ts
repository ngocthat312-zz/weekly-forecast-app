import {
    CityType,
    GET_CITY_LIST,
    GET_CITY_LIST_SUCCESS,
    GetCityListAction,
    GetCityListSuccessAction,
    SEARCH_CITY_REQUEST,
    SearchCityRequestAction,
    SET_CITY_LIST,
    SetCityListAction
} from './Home.types';

export const setCityList = (cityList: CityType[]): SetCityListAction => {
    return {
        type: SET_CITY_LIST,
        cityList,
    };
}

export const getCityList = (cityText: string): GetCityListAction => {
    return {
        type: GET_CITY_LIST,
        cityText
    };
}

export const searchCityRequest = (): SearchCityRequestAction => {
    return {
        type: SEARCH_CITY_REQUEST,
    }
}

export const getCityListSuccess = (cityList: CityType[]): GetCityListSuccessAction => {
    return {
        type: GET_CITY_LIST_SUCCESS,
        cityList
    };
}
