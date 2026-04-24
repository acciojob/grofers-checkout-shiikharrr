// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  function calculateTotal() {
    let total = 0;
    
    // Get all price elements
    const priceElements = document.querySelectorAll('.prices');
    
    // Sum up all prices
    priceElements.forEach((priceElement) => {
      const priceValue = parseFloat(priceElement.textContent.trim());
      if (!isNaN(priceValue)) {
        total += priceValue;
      }
    });
    
    // Set the total in the ans element
    document.getElementById('ans').textContent = total;
  }
  
  // Call the function to calculate total
  calculateTotal();
});