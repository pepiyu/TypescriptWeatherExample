import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
const temperature =  document.getElementById("weather-temp");
const weatherDescription = document.getElementById("weather-desc");
const LocationText = document.getElementById("location-text");
const DateDayName = document.getElementById("date-dayname");
const DateDay = document.getElementById("date-day");
const maxTemp = document.getElementById("text-temp-max");
const minTemp = document.getElementById("text-temp-min");
const humidity = document.getElementById("text-humidity");
const wind = document.getElementById("text-wind");
const locationInput = document.getElementById("weather-location-input");

export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");


// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    temperature ? temperature.textContent = Math.floor(weather.main.temp).toString() + "ºC" : null
    weatherDescription ? weatherDescription.textContent = weather.weather[0].main : null
    changeWeatherIcon(weather.weather[0].icon ?? '01d')
    LocationText ? LocationText.textContent = weather.name : null
    DateDayName ? DateDayName.textContent = getDayOfWeek() : null
    DateDay ? DateDay.textContent = getDate() : null
    maxTemp ? maxTemp.textContent = Math.floor(weather.main.temp_max) + " ºC" : null
    minTemp ? minTemp.textContent = Math.floor(weather.main.temp_min) + " ºC" : null
    humidity ? humidity.textContent = weather.main.humidity.toString() + " %" : null
    wind ? wind.textContent = weather.wind.speed.toString() + " m/s" : null

}

// TODO: Get the city from the input element
export function getCity(): string {
    if(locationInput) {
        return (locationInput as HTMLInputElement).value;
    }
    return "";
}

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
}

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
    }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');    
    }
}

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
}