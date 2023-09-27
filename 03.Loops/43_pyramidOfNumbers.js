function pyramidOfNumbers(n) {
    if (n <= 0) {
        console.log("Please provide a positive n.");
        return;
      }
    
      const maxLength = n.toString().length;
    
      for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
          row += " ".repeat(maxLength);
        }
        for (let j = 1; j <= i; j++) {
          const num = (i * (i - 1)) / 2 + j;
          row += num.toString().padStart(maxLength, " ");
        }
        console.log(row);
      }
}

pyramidOfNumbers(4);
pyramidOfNumbers(5);
pyramidOfNumbers(3);