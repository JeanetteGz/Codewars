/* Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z' */

function addLetters(...letters) {

    // Check If  no letters then its Z
    if (letters.length === 0) {
        return 'z'
    }
    // 
    const getLetterValue = letter => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1

    let totalSum = 0
    for (let i = 0; i < letters.length; i++) {
        totalSum += getLetterValue(letters[i])
    }
    totalSum = (totalSum - 1) % 26 + 1;

    let result = " "
    for (let i = 0; i < letters.concat.length; i++) {
        result = String.fromCharCode('a'.charCodeAt(0) + totalSum - 1)
    }
    return result
}

console.log(addLetters('a', 'b', 'c'))
console.log(addLetters('a', 'b'))
console.log(addLetters('z'))
console.log(addLetters('z', 'a'))
console.log(addLetters('y', 'c', 'b'))
console.log(addLetters())