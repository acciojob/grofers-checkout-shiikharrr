function calculateTotal() {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    const value = parseInt(price.innerText.trim(), 10);
    if (!isNaN(value)) {
      total += value;
    }
  });

  document.getElementById("ans").innerText = total;
}

calculateTotal();