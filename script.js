const button = document.getElementById("sum_btn");

button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  const table = document.querySelector("table");

  let total = 0;
  prices.forEach((price) => {
    total += Number(price.textContent.trim());
  });

  const oldRow = document.getElementById("total_row");
  if (oldRow) {
    oldRow.remove();
  }

  const tr = document.createElement("tr");
  tr.id = "total_row";

  const td1 = document.createElement("td");
  td1.textContent = "Total Price";

  const td2 = document.createElement("td");
  td2.id = "ans";
  td2.textContent = total;

  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
});