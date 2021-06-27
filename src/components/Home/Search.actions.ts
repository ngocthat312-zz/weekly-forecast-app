import {
    GET_LOCATION_DAY,
    GET_LOCATION_DAY_REQUEST,
    GET_LOCATION_DAY_SUCCESS,
    GetLocationDayAction,
    GetLocationDayRequestAction,
    GetLocationDaySuccessAction,
    SET_LOCATION_DAY,
    SetLocationDayAction
} from './Search.types';
import {WeatherInfo} from './Day.types';
import {SET_IS_LOADING, SetIsLoading} from '../Home.types';

export const setLocationDay = (cityLocationDay: WeatherInfo[]): SetLocationDayAction => {
    return {
        type: SET_LOCATION_DAY,
        cityLocationDay,
    };
}

export const getLocationDay = (woeid: number): GetLocationDayAction => {
    return {
        type: GET_LOCATION_DAY,
        woeid,
    };
}
export const getLocationDayRequest = (): GetLocationDayRequestAction => {
    return {
        type: GET_LOCATION_DAY_REQUEST
    }
}
export const getLocationDaySuccess = (cityLocationDay: WeatherInfo[]): GetLocationDaySuccessAction => {
    return {
        type: GET_LOCATION_DAY_SUCCESS,
        cityLocationDay,
    };
}

export const setIsLoading = (isLoading: boolean): SetIsLoading => {
    return {
        type: SET_IS_LOADING,
        isLoading,
    }
}
