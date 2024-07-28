document.addEventListener('DOMContentLoaded', () => {
    const weatherData = document.getElementById('weather-data');
    const locations = document.querySelectorAll('.dropdown-content a');
    const weatherApiKey = 'Not in use';
    const weatherApiUrl = 'https://api.openweathermap.org/data/3.0/onecall';

    //This will most likely be removed unless search functionality implemented.
    const geoApiKey = 'Not in use';
    const groApiUrl = 'https://api.openweathermap.org/geo/1.0/direct'

    locations.forEach(place => {
        place.addEventListener('click', (event) =>{
            event.preventDefault();
            const location = place.getAttribute('data-location');
            let lat = 0.0;
            let lon = 0.0;
            fetch(`${groApiUrl}?q=${location}&limit=5&appid=${geoApiKey}`)
                .then(response => response.json())
                .then(data => {
                    lat = data[0].lat;
                    lon = data[0].lon;
                })
                .catch(error => {
                    console.error('Could not read geo location data:', error);
                });
            fetch(`${weatherApiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`)
                .then(response => response.json())
                .then(data => {
                    const newHTML = `
                        <h2>${location}</h2>
                        <p>Weather: ${data[0].current.weather[0].main}</p>
                        <p>Temperature: ${data[0].current.temp}°C</p>
                        <p>Humidity: ${data[0].current.humidity}%</p>
                    `;
                    weatherData.innerHTML = newHTML;
                })
                .catch(error => {
                    weatherData.innerHTML = `<p>Error getting data.</p>`;
                    console.error('Error detected regarding the data collection process:', error);
                });
        });
    });
});