document.getElementById("sum_btn").addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((price) => {
    total += parseInt(price.innerText.trim(), 10);
  });

  document.getElementById("ans").innerText = total;
});