function isPalindrome(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');

    return numStr === reversedStr;
}

function palindromeNumbers(arr = []) {
    for (let number of arr) {
        console.log(isPalindrome(number));
    }
}

palindromeNumbers([123, 323, 421, 121]);
palindromeNumbers([32, 2, 232, 1010]);