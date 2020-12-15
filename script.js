// Enter Budget

let totalPurchases = 0;
let purchaseArray = [];
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
  addNewPurchase.innerText =
    addPurchase.purchase + " : $" + addPurchase.amount + " " + addPurchase.date;
  purchaseList.append(addNewPurchase);
  console.log(addNewPurchase);
  
  newBalance = newBalance - addPurchase.amount;
  console.log("balance" + newBalance);
  totalPurchases = totalPurchases + parseInt(addPurchase.amount);
  console.log("total purchases" + totalPurchases);
  switch (addPurchase.category) {
    case "Food":
      totalFood = totalFood + parseInt(addPurchase.amount);
    case "Bills":
      totalBills = totalBills + parseInt(addPurchase.amount);
    case "Clothing":
      totalClothing = totalClothing + parseInt(addPurchase.amount);
    case "Entertainment":
      totalEntertainment = totalEntertainment + parseInt(addPurchase.amount);
      console.log(totalFood + "total food");
  }
  updateBalance();
  console.log(totalFood + "total food");
}

function updateBalance() {
  newBalance = newBalance - totalPurchases;
  console.log(newBalance);
  remainingBalance.innerText = "$" + newBalance;
  if (totalPurchases === newBalance > 0) {
    alert("Weekly budget consumed! Cannot purchase additional items.");
  }
}
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

// Asia will work on the category table

var entry = document.getElementById("submit");
entry.addEventListener("click", displayCategoryDetails);

var row = 1;
function displayCategoryDetails() {
  var purchaseCategory = document.getElementById("category").value;
  var purchaseAmount = document.getElementById("amount").value;

  //create table
  var display = document.getElementById("display");
  //add new row
  var newRow = display.insertRow(row);
  //create cells
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  // var cell3 = newRow.insertCell(2);

  cell1.innerHTML = purchaseCategory;
  cell2.innerHTML = purchaseAmount;
  // cell3.innerHTML = "";

  row++;
}
