document.querySelector('.weatherForm').addEventListener('submit', async (e) => {
    
    e.preventDefault();
    const city = document.querySelector('.cityInput').value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=0b2038436f5b92e45dac9b71f019a507';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector('.card').style.display = 'block';
    document.querySelector('.displayCity').innerText = data.name;
    document.querySelector('.weatherDescription').innerText = data.weather[0].description;
    const imageIcon = data.weather[0].id;
        if (imageIcon>200 && imageIcon<600){
            document.querySelector('.icon').src = './src/rain_day.png';
        }
        else if (imageIcon>=600 && imageIcon<700){
            document.querySelector('.icon').src = './src/snow_day.png';
        }
        else if (imageIcon>=700 && imageIcon<800){
            document.querySelector('.icon').src = './src/storm_day.png';
        }
        else if (imageIcon>800 && imageIcon<900){
            document.querySelector('.icon').src = './src/cloudy_day.png';
        }
        else{
            document.querySelector('.icon').src = './src/clear_day.png';
        }
    document.querySelector('.icon').alt = data.weather[0].description;
    document.querySelector('.temperature').innerText = Math.round(data.main.temp - 273.15) + '°C';
    document.querySelector('.humidity').innerText = 'Humidity: ' + data.main.humidity + '%';
    document.querySelector('.wind').innerText = 'Wind speed: ' + data.wind.speed + ' km/h';
});







