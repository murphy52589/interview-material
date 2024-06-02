/* 
1. Output all numbers from 1 to 100
2. Output all numbers from 1 to 100 except even numbers
3. Output all numbers from 1 to 100 except even and if it is a multiple of 5, run a function that outputs "I am a multiple of 5"
*/

const outputNumbers = () => {
  const numbers = [];
  for(let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      numbers.push(i);
    }

    if (i % 2 !== 0 && i % 5 === 0) {
      multipleOf5();
    }
  }
  return numbers;
};

const multipleOf5 = () => {
  console.log("I am a multiple of 5");
};

console.log(outputNumbers());