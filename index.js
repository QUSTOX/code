document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('search').value;
    if (city) {
        getWeather(city);
    }
});

document.getElementById('refreshBtn').addEventListener('click', () => {
    const city = document.getElementById('search').value || "Default City";
    getWeather(city);
});

function getWeather(city) {
    if (navigator.onLine) {
        // Fetch the weather data from an online source (API).
        // Example of offline handling:
        fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
                saveWeatherData(data);
            })
            .catch(error => {
                alert("Could not fetch weather. Showing offline data.");
                loadOfflineWeather();
            });
    } else {
        loadOfflineWeather();
    }
}

function displayWeather(data) {
    document.getElementById('location').innerText = data.location.name;
    document.getElementById('condition').innerText = data.current.condition.text;
    document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
    document.getElementById('windspeed').innerText = `Wind Speed: ${data.current.wind_kph} km/h`;
}

function saveWeatherData(data) {
    localStorage.setItem('weatherData', JSON.stringify(data));
}

function loadOfflineWeather() {
    const offlineData = localStorage.getItem('weatherData');
    if (offlineData) {
        const data = JSON.parse(offlineData);
        displayWeather(data);
    } else {
        alert("No offline data available.");
    }
}

window.onload = loadOfflineWeather;