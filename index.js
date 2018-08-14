// To run, call:
// // //  node without_comments.js

// This is a function to sort the array assending

const sorting = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) { // Compare the current element with the first element in arr
            arr.unshift(arr.splice(i,1)[0]) // put the current element in the first
        } else if (arr[i] > arr[i-1]) { continue; } // Compare the cuurent element with the one before it

        else {
            for (let j = 1; j < i; j++) { // A loop for reach all of the elements before the current element
                if (arr[i] > arr[j-1] && arr[i] < arr[j]) { // Compare the element from the first loop with the elements before it
                  arr.splice(j,0,arr.splice(i,1)[0]); // if the condition is true they will be replaced here
                }
            }
        }
    }
    return arr;
}

console.log(sorting([100,200,4,50,77]));