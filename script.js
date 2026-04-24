document.addEventListener('DOMContentLoaded', function() {
  function calculateTotal() {
    let total = 0;
    const priceElements = document.querySelectorAll('.prices');
    priceElements.forEach((priceElement) => {
      const priceValue = parseFloat(priceElement.textContent.trim());
      if (!isNaN(priceValue)) {
        total += priceValue;
      }
    });
    document.getElementById('ans').textContent = total;
  }
  calculateTotal();
});