/*
    Please have the console log out the missing number in an array.
    Input array has the following constraints:
        - It's a sorted array of integers starting from 1
        - Each element should be one greater than the previous element
        - Only 1 number is missing
*/

/*
In this code, the findMissingNumber function iterates through the array starting from the second number.
For each number, it checks if the number is one greater than the previous number.
If it's not, it returns the previous number plus one, which is the missing number.
If no number is missing, it returns null.
*/
const missingNumber = (input) => {
    for (let i = 1; i < input.length; i++) {
        if (input[i] !== input[i - 1] + 1) {
            return input[i - 1] + 1;
        }
    }
    // If no number is missing, return null
    return null;
};

const inputArray = [1, 2, 3, 4, 6, 7, 8, 9, 10];
missingNumber(inputArray);
