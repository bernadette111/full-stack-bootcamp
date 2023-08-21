function addNumbers(num1 , num2){
    return num1 + num2;
}
console.log(addNumbers(3 , 4));

function findMax(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "Both are equal";
    }
  }
  console.log(findMax(2 , 4));
  
  function compute (num111, num222, operation) {
    function add () {
        return num111+num222;
    }
    function substract() {
        return num111-num222;
    }
    function multiply () {
        return num111*num222;
    }
    function divide() {
        if (num222 !==0) {
            return num111/num222;
        } else {
            return "Cannot divide by 0";
        }
    }
    switch (operation) {
        case "add":
            return add();
         case "subtract":
            return subtract();
        case "multiply":
             return multiply();
        case "divide":
             return divide();
        default:
            return "Invalid operation";
            }
    }
console.log (compute (10, 50, "multiply"));

const squareNumber = (number) => number * number;
console.log(squareNumber(5));

const globalVar = 10;
const squarenumber = (number) => {
    
    console.log("Value of globalVar inside squareNumber:", globalVar);
  
    return number * number;
  };
  const squaredValuee = squareNumber(5);
  console.log("Squaredvalue:", squaredValuee);
  
const squareNumberr = (number) => {
    
    const localVar = 20;
  
   
    return number * number;
  };
  
  
  const squaredValue = squareNumber(5);
  
  console.log("Value of localVar outside squareNumber:", globalVar);
  console.log("Squared value:", squaredValue);
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}
let ii = 1;

do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 10);
const favoriteFruits = ["apple", "banana", "strawberry", "kiwi", "orange", "watermelon"];

for (const fruit of favoriteFruits) {
  if (fruit.length > 5) {
    console.log(fruit);
  }
}