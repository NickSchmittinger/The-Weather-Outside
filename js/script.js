document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchCity = document.getElementById('search-city');
    const weatherInfo = document.getElementById('weather-info');

    searchCity.addEventListener('keydown', (event) =>{
        if(event.key == 'Enter'){
            const weatherHTML = `<h2>TEST</h2>`;
            weatherInfo.innerHTML = weatherHTML;
        }
    });

    searchButton.addEventListener('click', () => {
        const city = searchCity.ariaValueMax;

        const weatherHTML = `<h2>${city}</h2>
                                <p>Temp: -- C</p>
                                <p>Weather: --</p>
                                <p>Humidity --%</p>
                                <p>Wind Speed: -- m/s</p>
                                `;
        
        weatherInfo.innerHTML = weatherHTML;
    });
});