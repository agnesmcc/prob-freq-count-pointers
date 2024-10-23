// add whatever parameters you deem necessary
function twoArrayObject(keysArray, valuesArray) {
    let obj = {};

    for (let i = 0; i < keysArray.length; i++) {
        obj[keysArray[i]] = valuesArray[i] || null;
    }

    return obj;
}

module.exports = twoArrayObject;
