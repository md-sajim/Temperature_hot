const KEY_API = `539895ccefd256d060b489171249fe34`;
const searchButton = () => {
  const inputFiled = document.getElementById("inputField").value;
  console.log(inputFiled);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFiled}&appid=${KEY_API}&units=metric`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => cityInfo(data));
};
const inareText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const cityInfo = (tempratureinto) => {
  console.log(tempratureinto);
  inareText("city-name", tempratureinto.name);
  inareText("temp", tempratureinto.main.temp);
  inareText("weatherField", tempratureinto.weather[0].main);
  const url = `http://openweathermap.org/img/wn/${tempratureinto.weather[0].icon}@2x.png`;
  const iconUrl = document.getElementById("weather-icon");
  iconUrl.setAttribute("src", url);
};
