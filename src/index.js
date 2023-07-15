let searchInput = document.getElementById("search-input");
let submitButton = document.getElementById("submit-button");

const fetchWeather = async search => {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d1bfed572118495ea1d193651231407&q=${search}`,
      { mode: "cors" }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

const processJSON = async response => {
  let json = await response.json();
  console.log(json);
};

submitButton.addEventListener("click", () => {
  let search = searchInput.value;
});

fetchWeather("london");
