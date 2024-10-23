// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {

    let str1 = int1.toString();
    let str2 = int2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

module.exports = sameFrequency;