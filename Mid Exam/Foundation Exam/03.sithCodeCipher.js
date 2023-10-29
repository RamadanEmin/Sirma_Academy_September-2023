function decipherSithCode(str, n) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (char >= 'a' && char <= 'z') {
        char = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) - n + 26) % 26) + 'a'.charCodeAt(0));
      } else if (char >= 'A' && char <= 'Z') {
        char = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) - n + 26) % 26) + 'A'.charCodeAt(0));
      } else if (char >= '0' && char <= '9') {
        char = String.fromCharCode(((char.charCodeAt(0) - '0'.charCodeAt(0) - n + 10) % 10) + '0'.charCodeAt(0));
      }
  
      result += char;
    }
  
    return result;
  }
  
  console.log(decipherSithCode("Uifsf jt b tdifsu", 1)); 
  console.log(decipherSithCode("Dagobah", 3));
  console.log(decipherSithCode("R2-D2", 5)); 