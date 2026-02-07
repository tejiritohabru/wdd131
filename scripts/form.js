const products = [
  { id: "p1", name: "Wireless Camera" },
  { id: "p2", name: "Smart Door Lock" },
  { id: "p3", name: "Home Alarm System" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

// Review counter
let reviewCount = localStorage.getItem("reviewCount");
if (reviewCount === null) {
  reviewCount = 0;
}
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
