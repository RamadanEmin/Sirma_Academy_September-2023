function vegetableMarket(vegetable, day, quantity) {
    let totalPrice = 0;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (vegetable) {
                case 'tomato':
                    totalPrice = 2.50 * quantity;
                    break;
                case 'onion':
                    totalPrice = 1.20 * quantity;
                    break;
                case 'lettuce':
                    totalPrice = 0.85 * quantity;
                    break;
                case 'cucumber':
                    totalPrice = 1.45 * quantity;
                    break;
                case 'pepper':
                    totalPrice = 5.50 * quantity;
                    break;

                default:
                    return 'error';
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch (vegetable) {
                case 'tomato':
                    totalPrice = 2.80 * quantity;
                    break;
                case 'onion':
                    totalPrice = 1.30 * quantity;
                    break;
                case 'lettuce':
                    totalPrice = 0.85 * quantity;
                    break;
                case 'cucumber':
                    totalPrice = 1.75 * quantity;
                    break;
                case 'pepper':
                    totalPrice = 3.50 * quantity;
                    break;

                default:
                    return 'error';
            }
            break;

        default:
            console.log('error');
            break;
    }

     return totalPrice.toFixed(2);
}

console.log(vegetableMarket("tomato", "Tuesday", 2));
console.log(vegetableMarket("onion", "Sunday", 3));
console.log(vegetableMarket("pepper", "Monday", 10));
console.log(vegetableMarket("banana", "Friday", 5));