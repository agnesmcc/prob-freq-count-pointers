// add whatever parameters you deem necessary
function averagePair(nums, target_avg) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let avg = (nums[start] + nums[end]) / 2;
        if (avg === target_avg) {
            return true;
        } else if (avg < target_avg) {
            start++;
        } else {
            end--;
        }
    }

    return false;
}

module.exports = averagePair
