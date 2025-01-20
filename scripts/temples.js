// temples.js

// Update Footer Year and Last Modified Date
document.addEventListener("DOMContentLoaded", () => {
  // Update copyright year
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  // Update last modified date
  const lastModified = document.lastModified;
  const footer = document.querySelector("footer p");
  footer.innerHTML += `<br>Last Modified: ${lastModified}`;
});

// Hamburger Menu Toggle
const hamburgerButton = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
  navigationMenu.classList.toggle("visible");
  // Change the hamburger icon to 'X' when the menu is active
  const isActive = navigationMenu.classList.contains("visible");
  hamburgerButton.innerHTML = isActive ? "&#10005;" : "&#9776;"; // 'X' or hamburger icon
});