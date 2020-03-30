// Adds two (+2) to each odd integer.
// Subtracts two (-2) to each even integer.

// Examples

// evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

// evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]

var array1 = [3, 4, 9];
var n1 = 3;

function evenOddTransform(array, n) {
    //Going through n cycles:
    for (i=0; i<n; i++){
        //Going through the array:
        for (j=0; j<array.length; j++) {
            // Modifying the numbers:
            if (array[j] % 2 == 1) {
                array[j] = array[j] + 2;
            } else {
                array[j] = array[j] - 2;
            }
        }
    }
    
console.log (array);
return (array);
};

console.log ("For [3, 4, 9] and  3 the result is:");
evenOddTransform(array1, n1);

