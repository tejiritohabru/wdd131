// ==========================
// Appointment Form JS
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("appointment-form");
  const thankYou = document.getElementById("thank-you");
  const countEl = document.getElementById("count");
  const recentList = document.getElementById("recent-appointments");

  // Load existing appointments from localStorage
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  let count = appointments.length;
  countEl.textContent = count;

  // Render recent appointments
  function renderAppointments() {
    recentList.innerHTML = "";
    appointments.slice(-5).reverse().forEach((appt, index) => {
      const li = document.createElement("li");
      li.textContent = `${appt.name} - ${appt.service} on ${appt.date}`;
      recentList.appendChild(li);
    });
  }

  renderAppointments();

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const newAppointment = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      date: form.date.value,
      notes: form.notes.value
    };

    // Save to appointments array and localStorage
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    // Update count
    count = appointments.length;
    countEl.textContent = count;

    // Show thank you message and hide form
    form.style.display = "none";
    thankYou.style.display = "block";

    // Render recent appointments
    renderAppointments();

    // Optional: reset form if you want it hidden then ready again
    form.reset();
  });

});
