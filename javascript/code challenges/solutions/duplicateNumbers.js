const DuplicateNumbers = (arr) => {
    const counts = {};
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]]) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            counts[arr[i]] = true;
        }
    }
    return duplicates;
};

let array = Array.from({ length: 100 }, (_, i) => i + 1);

// Add a few duplicates
array.push(1, 2, 3, 50, 75);

console.log(array);

console.log(DuplicateNumbers(array));
