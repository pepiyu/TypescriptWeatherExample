import { WeatherResponse } from "../model/weatherResponse";

// TODO: Create an async function with an argument called city to return the that of the endpoint

export const getWeather = async (city: string) :Promise<WeatherResponse> => {
    let request: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    }
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

    let response = await fetch(API_CURRENT, request)
    return response.json()
}
