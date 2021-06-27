import axios from "axios";
import {META_WEATHER_API_URL} from "./Home.constants";

const locationUrl = `${META_WEATHER_API_URL}/location`;

export const searchCityService = async (cityText: string) => {
    const searchUrl = `${locationUrl}/search/?query=${cityText}`;
    return await axios.get(searchUrl);
}
