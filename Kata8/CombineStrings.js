/* Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens' */


// Create the combineNames function here
let firstName = "James"
let lastName = "Stevens"

function combineNames(firstName, lastName){
    return (firstName + " " + lastName)
}
let fullName = combineNames(firstName, lastName)
console.log(fullName)