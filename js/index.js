// 1. Even or Odd Checker
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is an even number.");
  } else {
    console.log(num + " is an odd number.");
  }
}

checkEvenOdd(7);
checkEvenOdd(8);


// 2. Multiplication Table Generator
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}

multiplicationTable(5);


// 3. FizzBuzz Challenge
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();


// 4. Square Pattern
function squarePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

squarePattern(5);


// 5. Right-Angled Triangle
function trianglePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

trianglePattern(5);