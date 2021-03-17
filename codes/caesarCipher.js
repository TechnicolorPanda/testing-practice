const encryptLetter = (character) => {
    return String.fromCharCode(character);
}

const wrappedEncryption = (character) => {
    character = character - 25;
    return encryptLetter(character);
}

const handleCharacters = (string) => {
  let encryptedWord = '';
  for (let i = 0; i < string.length; i++) {
    let character = string.charCodeAt(i);
    if ((character === 122) || (character === 90)) {
      encryptedWord = encryptedWord.concat(wrappedEncryption(character));
    } else if ((character < 65) || (character > 90 && character < 97) || (character > 122)) {
      encryptedWord = encryptedWord.concat(encryptLetter(character));
    } else {
      character++;
      encryptedWord = encryptedWord.concat(encryptLetter(character));
    }
  }
  return encryptedWord;
}

const encrypt = (string) => {
  if (typeof string === 'string') {
    return handleCharacters(string);
  } else {
    return;
  }
}
  
  module.exports = encrypt;