const findMostFrequentCharacters = (word) => {
    // Create an object to store character counts
    let charCounts = {};

    // Loop through the string and count each character
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }

    // Find the maximum count
    let maxCount = 0;
    for (let char in charCounts) {
        if (charCounts[char] > maxCount) {
            maxCount = charCounts[char];
        }
    }

    // Find characters with the maximum count
    let mostFrequentChars = [];
    for (let char in charCounts) {
        if (charCounts[char] === maxCount) {
            mostFrequentChars.push(char);
        }
    }

    return mostFrequentChars;
}

// Example usage:
let word = "assassination";
console.log(findMostFrequentCharacters(word)); // Output: ['l']
