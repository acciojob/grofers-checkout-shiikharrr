function calculateTotal() {
  let total = 0;

  document.querySelectorAll(".prices").forEach((price) => {
    total += Number(price.textContent.trim());
  });

  const tbody = document.querySelector("tbody");

  let totalRow = document.getElementById("total-row");
  if (!totalRow) {
    totalRow = document.createElement("tr");
    totalRow.id = "total-row";

    const td = document.createElement("td");
    td.id = "ans";
    td.colSpan = 2;
    totalRow.appendChild(td);

    tbody.appendChild(totalRow);
  }

  document.getElementById("ans").textContent = total;
}

calculateTotal();