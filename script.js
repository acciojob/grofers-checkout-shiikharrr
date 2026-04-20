document.addEventListener("DOMContentLoaded", function () {

  function calculateTotal() {
    let total = 0;

    document.querySelectorAll(".prices").forEach(price => {
      total += Number(price.innerText);
    });

    document.getElementById("ans").innerText = total;
  }

  // Run once
  calculateTotal();

  // Add click event safely
  document.getElementById("sum_btn").addEventListener("click", calculateTotal);

});