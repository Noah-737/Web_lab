// function removeDuplicates(arr)
//         {
//             return [...new Set(arr)]
//         }
//         const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape'];
//         const uniqueArr = removeDuplicates(arr);
//         alert(uniqueArr);


function removeDuplicates(arr) {
    let uniqueStrings = {}; // Object to store unique strings
    let result = [];

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the string is not already in the uniqueStrings object
        if (!uniqueStrings[arr[i]]) {
            // Add the string to the uniqueStrings object
            uniqueStrings[arr[i]] = true;
            // Add the string to the result array
            result.push(arr[i]);
        }
    }

    return result;
}

// Example usage:
const array = ["apple", "banana", "orange", "banana", "apple", "pear", "apple"];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: ["apple", "banana", "orange", "pear"]