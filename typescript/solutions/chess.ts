/* 
Have the function QueenCheck(strArr) read strArr which will be an array consisting of the locations of a queen and king on a standard 8 by 8 chess board with no other places on the board. The structure strArr will be the following: ["(x1, y1)", "(x2, y2)"] with (x1, y1) representing the position of the queen and (x2, y2) representing the location of the king with x and y ranging from 1 to 8. Your program should determine if the king is in check based on the current positions of the pices and if so, return the number of spaces it can move in order to get out of check. For example, if strArr is ["(4,4)", "(6,6)"] then your program should output 6. Remember, only the queen and king are on the board. If the queen is checking the king by being directly adjacent to it, technically the king can capture the queen
*/
function QueenCheck(strArr: [string, string]): number { 
  let validMoves = 0;

// Extract the queen's position from the input string and split it into x and y coordinates
const queenPosition = strArr[0].slice(1, -1).split(',');

// Extract the king's position from the input string and split it into x and y coordinates
const kingPosition = strArr[1].slice(1, -1).split(',');

// Parse the queen's x and y coordinates as integers
const queenX = parseInt(queenPosition[0]);
const queenY = parseInt(queenPosition[1]);

// Parse the king's x and y coordinates as integers
const kingX = parseInt(kingPosition[0]);
const kingY = parseInt(kingPosition[1]);

// Function to check if the king is in check by the queen
const isInCheck = (kingX: number, kingY: number, queenX: number, queenY: number): boolean => {
  // kingx === queenx means they are in the same row
  // kingy === queeny means they are in the same column
  // Math.abs(kingx - queenx) === Math.abs(kingy - queeny) means they are in the same diagonal
  return kingX === queenX || kingY === queenY || Math.abs(kingX - queenX) === Math.abs(kingY - queenY);
}

// If the king is not in check, return -1 (indicating no need to move)
if (!isInCheck(kingX, kingY, queenX, queenY)) return -1;

// Define the possible moves for the king (8 possible directions)
const moves: [number, number][] = [
  [1, 0], [-1, 0], [0, 1], [0, -1],  // Horizontal and vertical moves
  [1, 1], [1, -1], [-1, 1], [-1, -1] // Diagonal moves
];

  for (const move of moves) {
    const newKx = kingX + move[0];
    const newKy = kingY + move[1];
    if (1 <= newKx && newKx <= 8 && 1 <= newKy && newKy <= 8) {
      if(!isInCheck(newKx, newKy, queenX, queenY)) {
        validMoves += 1;
      }
    }
  } 

  return validMoves; 
}
   
// keep this function call here 
// @ts-ignore
console.log(QueenCheck(readline()));