const encryptLetter = (character) => {
    return String.fromCharCode(character);
}

const wrappedEncryption = (character) => {
    character = character - 26;
    return encryptLetter(character);
}

const encrypt = (string) => {
    let encryptedWord = '';
    for (let i = 0; i < string.length; i++) {
      let character = string.charCodeAt(i) + 1;
      if (character > 122) {
        let encryptedCharacter = wrappedEncryption(character);
        encryptedWord = encryptedWord.concat(encryptedCharacter);
      } else {
        let encryptedCharacter = String.fromCharCode(character);
        encryptedWord = encryptedWord.concat(encryptedCharacter);
      }
    }
    return encryptedWord;
}
  
  module.exports = encrypt;