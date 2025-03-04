let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const screenPrice = document.getElementById("screen-price");
const changeInDrawerDisplay = document.getElementById("change-in-drawer");
const cashInput = document.getElementById("cash");
const changeDisplay = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const currencyNames = {
  PENNY: "Pennies",
  NICKEL: "Nickels",
  DIME: "Dimes",
  QUARTER: "Quarters",
  ONE: "Ones",
  FIVE: "Fives",
  TEN: "Tens",
  TWENTY: "Twenties",
  "ONE HUNDRED": "Hundreds",
};

const currencyAmountInCents = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

screenPrice.textContent = `Total: $${price}`;

const priceInCents = Math.round(price * 100);

// Function to calculate total in cash drawer (in cents)
const calculateTotalInDrawer = () => {
  return Math.round(cid.reduce((total, currency) => total + currency[1] * 100, 0));
};

// Updates UI showing cash in drawer
const updateUI = () => {
  changeInDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>`;
  for (let i = 0; i < cid.length; i++) {
    const currencyName = currencyNames[cid[i][0]];
    changeInDrawerDisplay.innerHTML += `<p>${currencyName}: $${cid[i][1].toFixed(2)}</p>`;
  }
};

// Verifies if customer has enough money
let cash = 0;
const checkResults = () => {
  cash = Number(cashInput.value) * 100; 

  if (cash < priceInCents) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === priceInCents) {
    changeDisplay.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
  } else {
    calculateChange(cash, priceInCents);
  }

  // Updates UI after purchase
  updateUI();
};

// Calculates the change and updates the cid
const calculateChange = (cash, price) => {
  let total = calculateTotalInDrawer();

  if (total < cash - price) {
    changeDisplay.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
    return;
  }

  let change = cash - price;
  let changeArr = [];

  for (let i = currencyAmountInCents.length - 1; i >= 0; i--) {
    let currencyValue = currencyAmountInCents[i];
    let available = Math.round(cid[i][1] * 100);
    let amountToGive = 0;

    while (change >= currencyValue && available >= currencyValue) {
      change -= currencyValue;
      available -= currencyValue;
      amountToGive += currencyValue;
    }

    if (amountToGive > 0) {
      cid[i][1] = available / 100; // Updates the cash in cash register
      changeArr.push([cid[i][0], amountToGive / 100]);
    }
  }

  if (change > 0) {
    changeDisplay.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
  } else {
    changeDisplay.innerHTML = `<p>Status: OPEN</p>`;
    changeArr.forEach(([name, amount]) => {
      changeDisplay.innerHTML += `<p>${name}: $${amount.toFixed(2)}</p>`;
    });
  }
};

purchaseBtn.addEventListener("click", checkResults);

purchaseBtn.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

// Initializes the ui with correct values
updateUI();
