//Task 1
console.log("Task 1");

// Write a function called sum that takes in two numbers as parameters
// and returns their sum.

let number1= prompt("Enter first number");
let number2= prompt("Enter second number");
function sum(num1,num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(`Sum = ${sum(Number(number1),Number(number2))}`);

//Task 2
console.log("Task 2");

// Write a function called isEven that takes in a number as a parameter and
// returns true if the number is even and false if it is odd.
let number = prompt("Enter a number to check it's even or not");
console.log(`Number = ${number}`);
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(`Number is even (${isEven(number)})`);

//Task 3
console.log("Task 3");

// Write a function called reverseString that takes in string as a
// parameter and returns the string in reverse order.

let str = prompt("Enter a string you want to reverse");
console.log(`The string is : ${str}`);
function reverseString(string) {
    return string.split('').reverse().join('');
    }

console.log(`The reverse of string is : ${reverseString(str)}`);

//Task 4
console.log("Task 4");

// Write a function called calculateFactorial that takes in a number as a
// parameter and returns the factorial of that number (i.e. the product of
// all positive integers up to that number).

let num = prompt("Enter a number to convert into factorial");
console.log("Number = " + num);
function calculateFactorial(number) {
    for (let i = 1; i <= num; i++){
        if (number === 0) {
            return 1;
          } else {
            return number * calculateFactorial(number - 1);
          }
    }
}
console.log(`Factorial of the number is = ${calculateFactorial(num)}`);

//Task 5
console.log("Task 5");

// Write a function called convertTemperature that takes in a temperature
// in Celsius as a parameter and returns the equivalent temperature in
// Fahrenheit.

let tempCelsius = prompt("Enter temperature in Celsius" );
console.log(`Temperatue in Celsius : ${tempCelsius}`);
function convertTemperature(temp) {
    // F = (9/5)C + 32.
    let tempFar = tempCelsius*(9/5)+32;
    return tempFar;
}
console.log(`Temperature in Farhanheit : ${convertTemperature(tempCelsius)}`);

//Task 6
console.log("Task 6");

// Write a function called countVowels that takes in a string as a parameter
// and returns the number of vowels in the string. For example,
// countVowels("hello") should return 2.

let string = prompt("Enter your String to check number of vowels");
console.log(`String = ${string}`);

function countVowels(str){
    let vowels = 0;
    for(let i = 0; i< str.length; i++){
        if (str[i]=== "a" || str[i]==="e" || str[i]==="i" || str[i]==="o" ||str[i]==="u" || 
        str[i]==="A" || str[i]==="E" || str[i]==="I" || str[i]==="O" ||str[i]==="U")
        {
            vowels++;
        }
    }
    return vowels; 
};
console.log(`Number of vowels in the string = ${countVowels(string)}`);
