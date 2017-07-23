import axios from 'axios';
import { API_KEY } from '../secrets/constant';

// const API_KEY = '7bb466b11ea405c518b3af4bfff363b5';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// middlewares are functions that take an action and depending on the action type or payload, the middleware can choose for the action to pass through, stop it, manipulate it, console log it etc before it reaches any reducer (gate keepers)

// why would you want to change the action?

// reduce promise is a famous middleware package
// To keep the action types more consistents, saving it in a constant
// if for some reason someone changed it, it will break the code.
// saving it in a variable makes it safer (convention)

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&&q=${city},us`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// redux promise manipulates the data before it hits the reducer
// middleware stops the action until the promise is resolved!

// axios solely for ajax calls
//payload that contains additional data (optional)
