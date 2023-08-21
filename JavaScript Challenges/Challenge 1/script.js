console.log('I am linked now!');
var name;
var name = "bernadette";
alert(name);
let age = 18;

const DOB = "25 february";

console.log(age);
console.log(name);
console.log(DOB); 
console.log("this is a text");
console.log(true);
console.log(false);
console.log(1215);
console.log("999");
console.log({});
console.log([]);
console.log(null);
console.log(undefined);
  let hi = 1215;
  let text = "this is a text";
  let a = true ;
  let b =false;
  let number = 1215;
  let string = "999";
  let object ={};
  let array = [];
  let nothing = null;
  let undef;
  console.log(text);
  console.log(a);
  console.log(b);
  console.log(number);
  console.log(string);
  console.log(object);
  console.log(array);
  console.log(nothing);
  console.log(undef);

  let myText = "hello world!";
  let yourtext=' hello ';
  let ourtext = `hello you`;
  const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
  'This is my text using single quotations ${counter} times';
const doubleQuote =
  'This is my text using double quotations ${counter} times';
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;
console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote);
console.log(tryThisAlso);

var firstnum = 5;
var secondnum = 3;
let result = firstnum + secondnum ;
console.log(result);

console.log(number === string);
console.log(object !==  array);
console.log( hi == number);
console.log(nothing!= undef);

console.log(number > string);
console.log(hi >= number);
console.log( firstnum < secondnum);
console.log(null<= undef);
var result0;
result0 = 5+3*8;
var result1 = 10 / 2 + 3;
var result2 = 10 / (2+3);

console.log(result0);
console.log(result1);
console.log(result2);


if (age >= 20){
  console.log("you can enter this room");
}else{
  console.log("you can't enter this room");
}
const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);

const age2 = 25;
const hasDriverLicense = true;
const hasCar = false;

var candrive=false;
if (age2 >= 18 && hasDriverLicense){
  console.log(candrive=true);
}
var canRentCar = false;
if(age2 >=22 && hasDriverLicense && hasCar){
  console.log(canRentCar = true );
}
 var needDrive = false;

 if(age2 < 18 && hasDriverLicense && needDriver){
  console.log( needDriver=true );
 }


var role ="admin";
switch (role){
  case"admin": 
       console.log("you have read and write access for the data");
       break;
  case"user" : 
  console.log("you have only read access for the data");
  break;
  case"guest": 
  console.log("you have no access for the data");
  break;
  default:
    console.log("user role is not recognized");
}
