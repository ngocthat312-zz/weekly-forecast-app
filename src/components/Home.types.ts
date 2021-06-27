import {WeatherInfo} from './Home/Day.types';

export type CityType = {
    title: string,
    woeid: number,
}

export interface HomePropsType {
    cityLocationDay?: WeatherInfo[];
    isLoading?: boolean;
}

export const SET_CITY_LIST = 'SET_CITY_LIST';

export interface SetCityListAction {
    type: typeof SET_CITY_LIST;
    cityList: CityType[];
}

export const GET_CITY_LIST = 'GET_CITY_LIST';

export interface GetCityListAction {
    type: typeof GET_CITY_LIST;
    cityText: string;
}

export const SEARCH_CITY_REQUEST = 'SEARCH_CITY_REQUEST';

export interface SearchCityRequestAction {
    type: typeof SEARCH_CITY_REQUEST,
}

export const GET_CITY_LIST_SUCCESS = 'GET_CITY_LIST_SUCCESS';

export interface GetCityListSuccessAction {
    type: typeof GET_CITY_LIST_SUCCESS;
    cityList: CityType[];
}

export const SET_IS_LOADING = 'SET_IS_LOADING';

export interface SetIsLoading {
    type: typeof SET_IS_LOADING;
    isLoading: boolean,
}

export type HomeActions =
    | SetCityListAction
    | GetCityListAction
    | SearchCityRequestAction
    | GetCityListSuccessAction
    | SetIsLoading;