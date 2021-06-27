import {CityType} from '../Home.types';
import {WeatherInfo} from './Day.types';

export interface ISearchProps {
    cityList: CityType[],
}

export interface ISearchActionProps {
    onSearch(cityText: string): void,

    onSelectCity(woeid: number): void,
    setIsLoading(isLoading: boolean): void
}

export type IBaseLayoutProps = ISearchProps & ISearchActionProps;

export const SET_LOCATION_DAY = 'SET_LOCATION_DAY';

export interface SetLocationDayAction {
    type: typeof SET_LOCATION_DAY;
    cityLocationDay: WeatherInfo[];
}

export const GET_LOCATION_DAY = 'GET_LOCATION_DAY';

export interface GetLocationDayAction {
    type: typeof GET_LOCATION_DAY;
    woeid: number,
}

export const GET_LOCATION_DAY_REQUEST = 'GET_LOCATION_DAY_REQUEST';

export interface GetLocationDayRequestAction {
    type: typeof GET_LOCATION_DAY_REQUEST,
}

export const GET_LOCATION_DAY_SUCCESS = 'GET_LOCATION_DAY_SUCCESS';

export interface GetLocationDaySuccessAction {
    type: typeof GET_LOCATION_DAY_SUCCESS;
    cityLocationDay: WeatherInfo[]
}

export type SearchActions =
    | SetLocationDayAction
    | GetLocationDayAction
    | GetLocationDayRequestAction
    | GetLocationDaySuccessAction;