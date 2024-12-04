// String Manipulation Functions

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

// Find Maximum Value
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum Value
function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// Mathematical Functions

// Factorial
function factorial(n) {
  if (n < 0) return -1; // Factorial not defined for negative numbers
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence
function generateFibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];
  let fib = [0, 1];
  for (let i = 2; i < terms; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
