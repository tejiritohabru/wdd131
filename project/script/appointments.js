// appointments.js

const form = document.getElementById("appointmentForm");
const thankYouDiv = document.getElementById("thank-you");
const formWrapper = document.getElementById("form-wrapper");
const countEl = document.getElementById("count");
const recentList = document.getElementById("recent-appointments");

// Get existing count and names from localStorage
let count = parseInt(localStorage.getItem("appointmentCount")) || 0;
let recentAppointments = JSON.parse(localStorage.getItem("recentAppointments")) || [];

countEl.textContent = count;

// Function to render recent appointment names
function renderRecent() {
  recentList.innerHTML = "";
  // Show the last 5 submissions
  const recent = recentAppointments.slice(-5).reverse();
  recent.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    recentList.appendChild(li);
  });
}

// Initial render
renderRecent();

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  const nameInput = form.name.value.trim();
  if(!nameInput) return; // do not submit empty names

  // Increment count and save in localStorage
  count++;
  localStorage.setItem("appointmentCount", count);

  // Add name to recent appointments
  recentAppointments.push(nameInput);
  localStorage.setItem("recentAppointments", JSON.stringify(recentAppointments));

  // Update UI
  countEl.textContent = count;
  renderRecent();

  // Hide form, show thank-you message
  formWrapper.style.display = "none";
  thankYouDiv.style.display = "block";

  // Reset form
  form.reset();
});
