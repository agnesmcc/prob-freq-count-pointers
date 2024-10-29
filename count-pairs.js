// add whatever parameters you deem necessary
function countPairs(numbers, target) {

    let count = 0;

    let obj = {};
    // iterate through the array and keep a count of the total number of pairs found
    // store each number in an object, and check if the difference between the target 
    // and the current number has been seen before. If it has, increment count.
    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        if (obj[diff]) {
            count++;
        }
        obj[numbers[i]] = true;
    }

    return count;
}

module.exports = countPairs;
