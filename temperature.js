const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const convertAllButton = document.getElementById("convert-all");

convertAllButton.addEventListener("click", () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const kelvinValue = parseFloat(kelvinInput.value);

  if (!isNaN(celsiusValue)) {
    const fahrenheitFromCelsius = celsiusValue * 9/5 + 32;
    const kelvinFromCelsius = celsiusValue + 273.15;
    fahrenheitInput.value = fahrenheitFromCelsius.toFixed(2);
    kelvinInput.value = kelvinFromCelsius.toFixed(2);
  }

  if (!isNaN(fahrenheitValue)) {
    const celsiusFromFahrenheit = (fahrenheitValue - 32) * 5/9;
    const kelvinFromFahrenheit = (fahrenheitValue + 459.67) * 5/9;
    celsiusInput.value = celsiusFromFahrenheit.toFixed(2);
    kelvinInput.value = kelvinFromFahrenheit.toFixed(2);
  }

  if (!isNaN(kelvinValue)) {
    const celsiusFromKelvin = kelvinValue - 273.15;
    const fahrenheitFromKelvin = kelvinValue * 9/5 - 459.67;
    celsiusInput.value = celsiusFromKelvin.toFixed(2);
    fahrenheitInput.value = fahrenheitFromKelvin.toFixed(2);
  }
});
