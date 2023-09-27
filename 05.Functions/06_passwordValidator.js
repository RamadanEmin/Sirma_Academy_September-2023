function isLengthValid(password) {
    return password.length >= 6 && password.length <= 10;
}

function containsOnlyLettersAndDigits(password) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(password);
}

function hasAtLeastTwoDigits(password) {
    const digitCount = password.split('').reduce((count, char) => {
        if (/\d/.test(char)) {
            return count + 1;
        }
        return count;
    }, 0);

    return digitCount >= 2;
}

function passwordValidator(password) {
    let isValid = true;

    if (!isLengthValid(password)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!containsOnlyLettersAndDigits(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }
    if (!hasAtLeastTwoDigits(password)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if(isValid){
        console.log('Password is valid');
    }
}

passwordValidator('pass');
passwordValidator('APass123');
passwordValidator('Pa$s$s');