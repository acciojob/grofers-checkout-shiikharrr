const button = document.getElementById("sum_btn");

button.addEventListener("click", () => {
  const table = document.querySelector("table");
  const rows = document.querySelectorAll("table tr");

  const oldRow = document.getElementById("total_row");
  if (oldRow) oldRow.remove();

  let total = 0;

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll("td");
    if (cells.length >= 2) {
      total += Number(cells[1].textContent.trim()) || 0;
    }
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