function address(age, gender) {
    if (age < 16) {
        if (gender === 'f') {
            console.log('Miss');
        } else {
            console.log('Master');
        }
    } else {
        if (gender === 'f') {
            console.log('Ms.');
        } else {
            console.log('Mr.');
        }
    }
}

address(14, 'f');
address(17, 'm');
address(10, 'm');
address(32, 'f');