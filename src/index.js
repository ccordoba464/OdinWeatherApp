let searchInput = document.getElementById("search-input");
let submitButton = document.getElementById("submit-button");

let location = document.getElementById("location");
let country = document.getElementById("country");
let temperature = document.getElementById("temperature");
let condition = document.getElementById("condition");
let feelsLike = document.getElementById("feels-like");
let humidity = document.getElementById("humidity");

const fetchWeather = async search => {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d1bfed572118495ea1d193651231407&q=${search}`,
      { mode: "cors" }
    );
    return response;
  } catch (err) {
    throw new Error("Failed to fetch weather data");
  }
};

const processJSON = async response => {
  let json = await response.json();
  return json;
};

submitButton.addEventListener("click", async () => {
  event.preventDefault();
  let search = searchInput.value;
  let dataObject;
  try {
    let response = await fetchWeather(search);
    dataObject = await processJSON(response);
    console.log(dataObject);
  } catch (err) {
    alert(err);
  }

  location.textContent = dataObject.location.name;
  country.textContent = dataObject.location.country;
  temperature.textContent = dataObject.current.temp_f;
  condition.textContent = dataObject.current.condition.text;
  feelsLike.textContent = "Feels like: " + dataObject.current.feelslike_f;
  humidity.textContent = "Humidity: " + dataObject.current.humidity + "%";
});
