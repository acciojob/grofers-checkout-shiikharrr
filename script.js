function calculateTotal() {
  let total = 0;

  document.querySelectorAll(".prices").forEach(price => {
    total += Number(price.innerText);
  });

  document.getElementById("ans").innerText = total;
}

// Run on load
window.onload = calculateTotal;

// Run on button click
document.getElementById("sum_btn").addEventListener("click", calculateTotal);