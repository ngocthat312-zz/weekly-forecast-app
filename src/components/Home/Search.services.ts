import {META_WEATHER_API_URL} from '../Home.constants';
import axios from 'axios';

const locationUrl = `${META_WEATHER_API_URL}/location`;

export const getLocationDayService = async (woeid: number) => {
    const url = `${locationUrl}/${woeid}/`;
    return axios.get(url);
}
