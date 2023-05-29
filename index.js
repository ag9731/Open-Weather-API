const button = document.querySelector(".btn1");
const city = document.querySelector(".city");
const dcityname = document.querySelector(".cityName");
const weatherdescription = document.querySelector(".description");
// const tempratureinKelvin = document.querySelector(".temp");
const weathericon = document.querySelector(".weatherIcon");

const temperatureInCelsius = document.querySelector(".temp");

const displayData = async () => {
  const cityname = city.value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=328917128d3eded956ac3f83268854b3`
  );
  const jsonData = await response.json();
  console.log(jsonData);
  dcityname.textContent = jsonData.name;
  weatherdescription.textContent = jsonData.weather[0].description;
  weathericon.innerHTML = `<img src="http://openweathermap.org/img/w/${jsonData.weather[0].icon}.png" alt="Weather Icon">`;

  const temperatureInKelvin = jsonData.main.temp;
  const temperatureInCelsiusValue = temperatureInKelvin - 273.15;
  temperatureInCelsius.textContent = `${temperatureInCelsiusValue.toFixed(
    1
  )}°C`;
};

button.addEventListener("click", displayData);
