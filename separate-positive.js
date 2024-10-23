// add whatever parameters you deem necessary
function separatePositive(intArray) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let start = 0;
    let end = intArray.length - 1;

    // Iterate until the start index is less than the end index
    while (start < end) {
        // If the element at the start index is positive, move the start index forward
        if (intArray[start] > 0) {
            start++;
        // If the element at the end index is negative, move the end index backward
        } else if (intArray[end] < 0) {
            end--;
        // If the element at the start is negative and the element at the end is positive, swap them
        } else {
            swap(intArray, start, end);
            start++;
            end--;
        } 
    }

    return intArray;
}

module.exports = separatePositive;