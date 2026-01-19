// Static weather values
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Wind chill calculation function
function calculateWindChill(temp, wind) {
    // Formula valid for T <= 10°C and wind > 4.8 km/h
    if (temp <= 10 && wind > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16));
    } else {
        return "N/A";
    }
}

// Display wind chill
document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);

// Footer date information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
