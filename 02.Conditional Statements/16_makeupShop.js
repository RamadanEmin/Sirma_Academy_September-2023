function makeupShop(renovationPrice, powders, lipsticks, spirals, shadows, correctors) {
    const totalOrder = powders + lipsticks + spirals + shadows + correctors;
    let totalPrice = powders * 2.60 + lipsticks * 3.00 + spirals * 4.10 + shadows * 8.20 + correctors * 2.00;

    if (totalOrder >= 50) {
        totalPrice *= 0.75;
    }

    totalPrice *= 0.90;

    if (renovationPrice <= totalPrice) {
        console.log(`Yes! ${(totalPrice - renovationPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(renovationPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}

makeupShop(40.8, 20, 25, 30, 50, 10)
makeupShop(320, 8, 2, 5, 5, 1)