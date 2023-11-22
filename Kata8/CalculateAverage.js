/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

let array = [10, 20, 30];

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
let total = findAverage(array);
console.log(total)