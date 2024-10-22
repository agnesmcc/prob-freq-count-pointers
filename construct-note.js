// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    let msg_freq = {};
    let letters_freq = {};
    let result = true;

    if (letters.length == 0) {
      return false;
    }

    for (let i = 0; i < msg.length; i++) {
      msg_freq[msg[i]] = (msg_freq[msg[i]] || 0) + 1;
    }

    for (let i = 0; i < letters.length; i++) {
      letters_freq[letters[i]] = (letters_freq[letters[i]] || 0) + 1;
    }

    Object.keys(msg_freq).forEach(key => {
      if (msg_freq[key] > letters_freq[key]) {
        result = false;
      }
    });


    return result;
}

module.exports = constructNote;
