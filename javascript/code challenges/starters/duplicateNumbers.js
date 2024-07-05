const duplicateNumbers = (array) => {

}

let array = Array.from({ length: 100 }, (_, i) => i + 1);

// Add a few duplicates
array.push(1, 2, 3, 50, 75);

console.log(array);

console.log(duplicateNumbers(array));