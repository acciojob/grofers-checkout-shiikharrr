const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  const table = document.querySelector("table");

  let total = 0;

  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  const oldTotalRow = document.getElementById("total-row");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  const tr = document.createElement("tr");
  tr.id = "total-row";

  const td = document.createElement("td");
  td.setAttribute("colspan", "2");
  td.textContent = total;

  tr.appendChild(td);
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);