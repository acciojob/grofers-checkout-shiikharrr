document.addEventListener("DOMContentLoaded", () => {

  function calculateTotal() {
    let total = 0;

    document.querySelectorAll(".prices").forEach(price => {
      total += Number(price.textContent); // ✅ IMPORTANT CHANGE
    });

    const ans = document.getElementById("ans");
    if (ans) {
      ans.textContent = total; // ✅ use textContent here also
    }
  }

  calculateTotal();

  const btn = document.getElementById("sum_btn");
  if (btn) {
    btn.addEventListener("click", calculateTotal);
  }

});