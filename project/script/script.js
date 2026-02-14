// ===== BabyTailor Couture Services =====
const services = [
  { name: "Wedding & Formal Attire", img: "images/wedding2.jpg", desc: "Custom wedding gowns, prom dresses, and formal wear tailored to perfection." },
  { name: "Custom Everyday Styles", img: "images/dinner3.jpg", desc: "Design your daily outfits with professional fittings and unique designs." }
];

function renderServices(){
  const container = document.getElementById("services-container");
  container.innerHTML = ""; // clear
  services.forEach(s => {
    container.innerHTML += `
      <div class="card">
        <img src="${s.img}" loading="lazy" alt="${s.name}">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </div>
    `;
  });
}

// ===== Gallery Section =====
// ===== Gallery Items =====
const galleryItems = [
  { img: "images/ev2.jpeg", desc: "Elegant evening gown", category: "Wedding" },
  { img: "images/suite.jpeg", desc: "Custom tailored suit", category: "Custom" },
  { img: "images/kid.jpeg", desc: "Children's outfit", category: "Kids" },
  { img: "images/wedding2.jpg", desc: "Bridal dress set", category: "Wedding" },
  { img: "images/casu.jpeg", desc: "Casual fashion wear", category: "Custom" },
  { img: "images/3.png", desc: "Kids party dress", category: "Kids" }
];

// Function to render gallery (optionally filtered)
function renderGallery(filter = "all") {
  const container = document.getElementById("gallery-container");
  if(!container) return;

  // Filter items
  const filtered = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);

  // Clear container
  container.innerHTML = "";

  // Render items
  filtered.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.img}" loading="lazy" alt="${item.desc}">
        <h3>${item.desc}</h3>
      </div>
    `;
  });
}

// Event listeners for filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    renderGallery(category);
  });
});

// Render full gallery on page load
document.addEventListener("DOMContentLoaded", () => renderGallery());




// ===== Form localStorage =====
const form = document.getElementById("appointmentForm");
if(form){
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if(localStorage.getItem("name")) nameInput.value = localStorage.getItem("name");
  if(localStorage.getItem("email")) emailInput.value = localStorage.getItem("email");

  form.addEventListener("submit", e => {
    e.preventDefault();
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    alert("Appointment request saved!");
  });
}

// ===== DOM Loaded =====
document.addEventListener("DOMContentLoaded", () => {
  if(document.getElementById("services-container")) renderServices();
  if(document.getElementById("gallery-container")) renderGallery();
});

// ===== Dynamic Style Tips =====
const tips = [
  { text: "Always check the fabric type before washing — some silks and delicate fabrics require hand washing", category: "Washing" },
  { text: "Use cold water for delicate fabrics to prevent shrinkage or color fading.", category: "Materials" },
  { text: "Avoid harsh detergents — use mild or fabric-specific soap.", category: "Washing" },
  { text: "Do not wring delicate fabrics; gently squeeze out water or roll in a towel.", category: "Materials" },
  { text: "For wool or silk, dry clean when necessary.", category: "Materials" }
];

// Function to get a random tip
function getRandomTip() {
  const index = Math.floor(Math.random() * tips.length);
  return tips[index];
}

// Function to render tip in DOM
function renderTip() {
  const tipContainer = document.getElementById("tip-container");
  if(tipContainer){
    const tip = getRandomTip();
    tipContainer.innerHTML = `<p><strong>${tip.category} Tip:</strong> ${tip.text}</p>`;
  }
}

// Event listener for button
const tipBtn = document.getElementById("new-tip");
if(tipBtn){
  tipBtn.addEventListener("click", renderTip);
}

// Show first tip on page load
document.addEventListener("DOMContentLoaded", renderTip);
