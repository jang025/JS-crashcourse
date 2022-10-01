/* 
console.log("Hello World"[10]);
console.log("3333".length);
let str = "jeremy";
console.log(str);
console.log(str[0]);
console.log(str.length);
console.log(str[str.length - 1]); /* last letter of the string */
/* typeof gives the data type */

let fullname = "jeremy ang pin en";
let temperature = 20;
let planet = "earth";
let israining = true;

temperature = temperature + 2;
console.log(temperature);
// once you define a const variable you cannot reassign another variable to it //
/* 
ffwef
fwfrfw
frwfw
*/
let celsius = 10;
let farenheit = celsius * 1.8 + 32;
console.log(farenheit);
// semicolon is not necessary in javascript //
// "==" checks the values //
// "===" checks the values and the types //

let bool = "1" == 1;
console.log(bool);

let boolean = "1" === 1;
console.log(boolean);
// false because on the left is 1 and string while the right is 1 and integer//

// != is not equal //
// !== is not equal value and equal type //
let boo = "1" !== 1;
console.log(boo);

let subscribed = false;
let loggedin = true;

if (subscribed === true) {
  console.log("show the video");
} 
else if (loggedin === true) {
  console.log("tell the user to upgrade their subscription");
}
else {
  console.log("tell user to log into account");
}

//logical operators && , and   //
// && checks if the left and right side of the comparision is true //

// logical operators || , or  // 
// || checks if the left or right side of the comparison is true //

let cash = 20
let price = 20

// using back ticks instead of single or double quotation marks //
if (cash > price) {
  console.log(`you paid extra - here's ${cash - price} dollars change`)
}
else if (cash == price){
  console.log("you paid the exact amount, have a nice day")

}
else {
  console.log(`not enough money - you still owe ${price -cash} dollars`)
}


// falsy values is considered as 'false' when converted to a boolean //
// examples of falsy values are undefined , null, NaN , 0 , ''' , false //

// truthy values is considered as 'true' when converted to a boolean //
// examples include 10 , 3.14 , "Frontend Simplified" , "false" , "0", [], {} //

//!!truthy value will give a true value //
//!!falsy value will give a false value  //
let val = ''
if (val) {
  console.log("truthy value", !!val)
}
else {
  console.log(!!val)
}




// Ternary Operators //
let hot = true 

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let money = 50 
let cost = 40 
let isStoreOpen = true 

let Ace = money >= cost && isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(Ace)

//loops//

let count = 1;

/* while( count <= 100)  {
  console.log(count)
  count = count + 1
}
*/

/* for (let i = 0; i < 3; i++) {
  console.log(i);
}
*/

/* 
for ( let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 ===0 ) {
    console.log(`${i} -> Frontend Simplified`)
  }
  else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`)
  }
  else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`)
  }
  else {
    console.log(`${i} -> ${i}`)
  }
}
*/

/* 
const str = "Frontend Simplified"
for (let i = 0; i < str.length; i++) {
  console.log(str[i])
}
*/

// functions //

// function definition //
/* 
function welcomePersonToFes(firstName, lastName) {
console.log(`Welcome to FES , ${firstName} ${lastName}`)
}

// Call the function 
welcomePersonToFes('Jeremy', 'Ang')
welcomePersonToFes('John', 'Doe')

*/

/*
function sumOfTwoNumbers(num1,  num2) {
  return num1 / num2
}
console.log(sumOfTwoNumbers(10, 10))
*/  

/*
function convertCelciusToFarenheit(celcius) {
  return celcius * 1.8 + 32
}

console.log(convertCelciusToFarenheit(0))
console.log(convertCelciusToFarenheit(10))
console.log(convertCelciusToFarenheit(30))
*/

/* 
const convertCelciusToFarenheit = (celcius) => {
  return celcius * 1.8 + 32
}
console.log(convertCelciusToFarenheit(0))
console.log(convertCelciusToFarenheit(10))
console.log(convertCelciusToFarenheit(30))
*/

// Arrays //
/*

let arr = [20, 30, 40, 50, 100]

// first element of array //
console.log(arr[0])

// last element of array //
console.log(arr[arr.length -1])

// add element of array //
arr.push(200)
console.log(arr)

*/

/*

let arr = [20, 30, 40, 50, 100]
// [20 ,30, 40] //
let newArr = arr.filter((element) => {
  return element < 50
})

console.log(newArr)

let grades = ['A+', 'A', 'FAIL']

let goodGrades = grades.filter((element) => {
  return element !== 'FAIL'
})
console.log(goodGrades)

*/

/*

let grades = ['A+', 'A', 'FAIL']

for (let i = 0; i < grades.length; i++) {
  console.log(grades[i])
}

let goodGrades = []
for (let i = 0; i < grades.length; i++) {
  if(grades[i] !== "FAIL") {
    goodGrades.push(grades[i])
  }
}
console.log(goodGrades)
*/

 /*
let arr = [1,4,9,16]
let newArray = arr.map((element) => {
  console.log(element)
  return undefined
})
console.log(newArray)


let dollars = [1, 5, 10 ,3]
let cents = dollars.map((element) => {
  console.log(element)
  return element * 100
})
console.log(cents)

*/

// brute force method //
let dollars = [1, 5, 10, 3]
let cents =[]
for (let i = 0; i < dollars.length; i++) {
  cents.push(dollars[i] * 100);
}
console.log(cents)

//objects //
// commas impt for objects //
let user = {
  username: 'Jeremy',
  surname : ' Ang', 
  email : 'jeremy@hotmail.com'
}
console.log(user.email[0])

console.log(user.username)

//DOMS//

/*
DOM(Document Object Model) 
allows you to access and change the styling and content of elements on your website 

First way of accessing an element 
*/
console.log(document.querySelector("#title"))

// second way of accessing an element//
console.log(document.getElementById("title"))

// querySelector can be used for classes , Id , element itself //


// changing the h1 tag title using java script
document.querySelector("#title").innerHTML = "Frontend Simplified"

// change the css //
document.querySelector("#title").style.fontSize = "100px"

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark-theme")
}

