// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {

    if (string1.length > string2.length) {
        return false;
    }

    let start = 0;
    let i = 0;
    let j = 0;
    // iterate through string2
    while (j < string2.length) {
        // if character in string1 matches character in string2, move forward in string1
        if (string1[i] === string2[j]) {
            i++;
            // if we've reached the end of string1, return true
            if (i === string1.length) {
                return true;
            }
        }
        // move forward in string2
        j++;
    }

    return false;
}

exports = module.exports = isSubsequence;
