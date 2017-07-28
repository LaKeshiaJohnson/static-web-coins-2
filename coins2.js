/* Write a program that will convert a dollar amount to the number of coins 
that make up the amount. Use the common American coins of quarters, 
dimes, nickels, and pennies. */

console.log("hello");
let button = document.getElementById("calculate");
button.addEventListener("click", coinCounter);


var coinPurse = {};
  
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickles = 0;
  coinPurse.pennies = 0;

//coverting amounts to pennies so amounts are all on the same scale. makes it easier to work with
  let quarters = 25;
  let dimes = 10;
  let nickles = 5;
  let pennies = 1;


function coinCounter () {
  
  let inputArea = document.getElementById("inputArea").value * 100;


  let currentAmount = inputArea;
  let quarterAmount = currentAmount / quarters;
  coinPurse.quarters += Math.floor(quarterAmount);
  console.log(coinPurse);
  currentAmount = currentAmount - (quarters *  coinPurse.quarters);
  console.log(currentAmount);

  let dimeAmount = currentAmount / dimes;
  coinPurse.dimes += Math.floor(dimeAmount);
  currentAmount = currentAmount - (dimes * coinPurse.dimes);
  console.log(currentAmount);

  let nickleAmount = currentAmount / nickles;
  coinPurse.nickles += Math.floor(nickleAmount);
  currentAmount = currentAmount - (nickles * coinPurse.nickles);
  console.log(dimeAmount)

let pennyAmount = currentAmount / pennies;
coinPurse.pennies += Math.floor(pennyAmount);
currentAmount = currentAmount - (pennies * coinPurse.pennies);
console.log(pennyAmount);

console.log(coinPurse);
//let output = coinPurse[i];
//document.getElementById("output").innerHTML = Object.keys(coinPurse);

//output.innerHTML = coinPurse.value;

  };


 
