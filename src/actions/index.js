import axios from 'axios';
import Config from '../../config';

const API_KEY = Config.api_key;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    // axios get returns a promise
    const request = axios.get(url); 
    // redux-promise will halt action and wait until the promise from the
    // api request is resolved, then it will pass the resulting data on to the reducer.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}