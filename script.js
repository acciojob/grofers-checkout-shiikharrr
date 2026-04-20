function calculateTotal() {
  let total = 0;

  document.querySelectorAll(".prices").forEach(price => {
    total += Number(price.textContent);
  });

  document.getElementById("ans").textContent = total;
}

// Run initially
calculateTotal();

// Recalculate when button is clicked (Cypress may trigger this)
const btn = document.getElementById("sum_btn");
if (btn) {
  btn.addEventListener("click", calculateTotal);
}