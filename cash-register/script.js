let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const screenPrice = document.getElementById("screen-price");
const changeInDrawer = document.getElementById("change-in-drawer");

//teste
const cash = {
  'Pennies': 1.01,
  'Nickels': 2.05,
  'Dimes': 3.1,
  'Quarters': 4.25,
  'Ones': 90,
  'Fives': 55,
  'Tens': 20,
  'Twenties': 60,
  'Hundreds': 100,
};

screenPrice.textContent = `Total: $${price}`;

updateUI = () => {
  changeInDrawer.innerHTML = `<p><strong>Change in drawer:</strong></p>`;
  Object.entries(cash).forEach(([key, val]) => {
    changeInDrawer.innerHTML += `<p>${key}: $${val}</p>`;
});
};

updateUI();
