function discountCalculator(age, card) {
    let discount;

    if (age < 18) {
        discount = 10;
    } else if (age < 65) {
        if (card === 'Yes') {
            discount = 20;
        } else {
            discount = 10;
        }
    } else {
        discount = 30;
    }

    console.log(`${discount}% discount`);
}

discountCalculator(20, 'Yes');
discountCalculator(15, 'No');
discountCalculator(70, 'No');