/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
    "64607935616" -->      "#######5616"
            "1" -->                "1"
            "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!" */

function maskify(cc) {
    // Step 1: Convert the code into an array of characters
    const ccArray = cc.split("");
    // Step 2: Check if the code is short (4 characters or less)
    if (ccArray.length <= 4) {
        // If it is, return the code as is
        return cc;
    }
    // Step 3: Create a string of '#' characters to hide most of the code
    let lastChar = "#".repeat(cc.length - 4);
    // Step 4: Keep the last 4 characters of the code
    let lastFour = cc.slice(-4);
    // Step 5: Combine the '#' characters with the last 4 characters
    return lastChar + lastFour;
}

// Example usage:
console.log(maskify("123456789"));  // Output: "#####6789"


console.log(maskify("4556364607935616")); // Should return "############5616"
console.log(maskify("64607935616"));      // Should return "#######5616"
console.log(maskify("1"));                // Should return "1"
console.log(maskify(""));                 // Should return ""
console.log(maskify("Skippy"));           // Should return "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); // Should return "####################################man!"