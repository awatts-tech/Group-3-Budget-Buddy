// Enter BUdget

//let weeklyBudget;
//let newbudget;

document.querySelectorbyID("budget").addEventListener("click", saveBudget);

let weeklyBudget;
let newbudget;

function saveBudget(e) {
    e.preventdefault();
    weeklyBudget = newbudget;

}

console.log(weeklyBudget)