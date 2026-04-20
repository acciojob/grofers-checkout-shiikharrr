const prices = document.querySelectorAll(".prices");
let total = 0;

prices.forEach(price => {
  total += parseInt(price.textContent.trim(), 10);
});

document.getElementById("ans").textContent = total;