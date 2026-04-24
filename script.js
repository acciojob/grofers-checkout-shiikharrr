function calculateTotal() {
  let total = 0;
  document.querySelectorAll('.prices').forEach((price) => {
    total += parseFloat(price.textContent.trim()) || 0;
  });
  document.getElementById('ans').textContent = total;
}

// Calculate on page load → shows 410
calculateTotal();

// Recalculate on button click → shows updated total (333)
document.getElementById('sum_btn').addEventListener('click', calculateTotal);