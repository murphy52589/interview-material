const duplicateNumbers = (array) => {

}

let array = Array.from({ length: 100 }, (_, i) => i + 1);

// Add a few duplicates
array.push(1, 2, 3, 50, 75);
// once this condition is met, try it with something more complex like an array of arrays/objects.
// For example, const input = [1, 2, 3, 4, [1, 2], [1, 2], {a: 1}, {a: 1}, 2, 3, {b: 2}, [3, 4, 5], [3, 4, 5]];

console.log(array);

console.log(duplicateNumbers(array));
