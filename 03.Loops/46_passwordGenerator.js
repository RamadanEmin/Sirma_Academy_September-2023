function passwordGenerator(n, l) {  
    for (let digit1 = 1; digit1 <= n; digit1++) {
      for (let digit2 = 1; digit2 <= n; digit2++) {
        for (let letter1 = 97; letter1 < 97 + l; letter1++) {
          for (let letter2 = 97; letter2 < 97 + l; letter2++) {
            for (let digit3 = 1; digit3 <= n; digit3++) {
                if(digit3>digit1 && digit3>digit2){
                    const password = `${digit1}${digit2}${String.fromCharCode(letter1)}${String.fromCharCode(letter2)}${digit3}`;
                    console.log(password);
                }
            }
          }
        }
      }
    }
  }

  passwordGenerator(2,4);
  passwordGenerator(3,1);
  