const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

lastMod.innerHTML = `<span class="last-mod">${document.lastModified}</span>`;

let temperature = 73;
let windSpeed = 3;
const windChill = document.querySelector("#wind-chill");

function calculateWindChill(temperature, windSpeed)
{
    if (temperature > 50 && windSpeed <= 3) {
        return "N/A";
    } else {
        calculation = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        calculation = Math.round(calculation) + " °F"
        return calculation;
    }
}

let windChillValue = calculateWindChill(temperature, windSpeed);
windChill.innerHTML = `<span class="wind-chill">${windChillValue}</span>`;