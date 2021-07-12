// Style import
import './styles/main.scss';
import { getWeather } from './networking/weather'
// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// Add an event listener to the button

if (buttonClick) {
    buttonClick.addEventListener('click', function(){
        displayWeather()
    })
}
// Create an async function to call the API method

export const displayWeather = async () => {
    const city = getCity()
    if (city) {
        const weather = await getWeather(city)
        updateInteface(weather)
    }
}


