// Enter Budget

//const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

let totalPurchases = 0;
let purchaseArray = [];
let newBalance = 0;
let weeklyBudget = 0;
let totalFood = 0;
let totalBills = 0;
let totalEntertainment = 0;
let totalClothing = 0;
let weeklyInput = document.querySelector("#newbudget");
let updateWeeklyBudget = document.querySelector("#Weekly-Budget");
let purchaseName = document.querySelector("#name");
let purchaseDescription = document.querySelector("#description");
let purchasePrice = document.querySelector("#amount");
let purchaseDate = document.querySelector("#date");
let purchaseCategory = document.querySelector("#category");
let purchaseList = document.querySelector("#purchase-list");
let remainingBalance = document.querySelector("#Balance");
// let totalSpend = document.querySelector('#total-spend');

let addFoodTotal = document.querySelector("#Food");
let addBillsTotal = document.querySelector("#Bills");
let addClothingTotal = document.querySelector("#Clothing");
let addEntertainmentTotal = document.querySelector("#Entertainment");



document.querySelector("#budget").addEventListener("click", saveBudget);
document.querySelector("#purchase").addEventListener("click", purchases);

function saveBudget(e) {
  e.preventDefault();
  //console.log("having fun");
  weeklyBudget = weeklyInput.value;
  // console.log(weeklyBudget + "budget");
  updateWeeklyBudget.innerText = "$ " + weeklyBudget;
  newBalance = weeklyBudget;
  // weeklyInput.value = '';
  // console.log(newBalance + "balance");
}

// Charissa will work on completing this function
function purchases(e) {
  e.preventDefault();
  let addPurchase = {
    purchase: purchaseName.value,
    description: purchaseDescription.value,
    amount: purchasePrice.value,
    date: purchaseDate.value,
    category: purchaseCategory.value,
  };
  purchaseArray.push(addPurchase);
  let addNewPurchase = document.createElement("p");
  // addNewPurchase.innerText =
  //   addPurchase.purchase + " : $" + addPurchase.amount + " " + addPurchase.date;
  // purchaseList.append(addNewPurchase);
  console.log(addNewPurchase);
  //console.log(newBalance);
  //   newBalance = newBalance - addPurchase.amount;
  //   console.log("balance" + newBalance);
  //   newBalance.innerText = '$' + newBalance;
  totalPurchases = totalPurchases + parseInt(addPurchase.amount);
  console.log("total purchases" + totalPurchases);
  switch (addPurchase.category) {
    case "Food":
      totalFood = totalFood + parseInt(addPurchase.amount);
      addFoodTotal.innerText = "$" + totalFood;  
      break;

    case "Bills":
      totalBills = totalBills + parseInt(addPurchase.amount);
      addBillsTotal.innerText = "$" + totalBills;  

      break;
    case "Clothing":
      totalClothing = totalClothing + parseInt(addPurchase.amount);
      addClothingTotal.innerText = "$" + totalClothing;
      break;
    case "Entertainment":
      totalEntertainment = totalEntertainment + parseInt(addPurchase.amount);
      addEntertainmentTotal.innerText = "$" + totalEntertainment;
      
      console.log(totalFood + "total food");
  }
  updateBalance();
  console.log(totalFood + "total food");
}

function updateBalance() {
  newBalance = newBalance - totalPurchases;
  console.log(newBalance);
  remainingBalance.innerText = "$" + newBalance;
  if (newBalance <= 0) {
    alert("Weekly budget consumed! Cannot purchase additional items.");
  }
}
// function updateSpendTotal () {
//     totalSpend = 0; 
//     for (let i=-0; i < totalPurchases.length; i++) {
//         totalSpend += totalPurchases[i];
//     }
//     totalSpend.innerText = '$' + totalSpend;
//     updateBalance();
// }

// Liz will complete the update balance function
// Added balance function to purchase function

//function balance() {
//  newBalance = newBalance - addPurchase.amount;
//  console.log = "balance" + newBalance;
//  totalPurchases = totalPurchases + addPurchase.amount;
//  console.log = "total purchases" + totalPurchases;
//}

// Ashley worked on the pop up alert
// Ashely, I moved this to the update balance function
// if (totalPurchases === weeklyBudget > 0) {
//   alert("Weekly budget consumed! Cannot purchase additional items.")
// };
// Ashley will start research on the progress bar

// Asia will work on the category table - 
