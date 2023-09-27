function grocery(product, city, quantity) {
    switch (city) {
        case 'Sofia':
            switch (product) {
                case 'coffee':
                    console.log((quantity * 0.50).toFixed(2));
                    break;
                case 'water':
                    console.log((quantity * 0.80).toFixed(2));
                    break;
                case 'juice':
                    console.log((quantity * 1.20).toFixed(2));
                    break;
                case 'sweets':
                    console.log((quantity * 1.45).toFixed(2));
                    break;
                case 'chips':
                    console.log((quantity * 1.60).toFixed(2));
                    break;
                default:
                    break;
            }
            break;
        case 'Plovdiv':
            switch (product) {
                case 'coffee':
                    console.log((quantity * 0.40).toFixed(2));
                    break;
                case 'water':
                    console.log((quantity * 0.70).toFixed(2));
                    break;
                case 'juice':
                    console.log((quantity * 1.15).toFixed(2));
                    break;
                case 'sweets':
                    console.log((quantity * 1.30).toFixed(2));
                    break;
                case 'chips':
                    console.log((quantity * 1.50).toFixed(2));
                    break;
                default:
                    break;
            }
            break;
        case 'Varna':
            switch (product) {
                case 'coffee':
                    console.log((quantity * 0.45).toFixed(2));
                    break;
                case 'water':
                    console.log((quantity * 0.70).toFixed(2));
                    break;
                case 'juice':
                    console.log((quantity * 1.10).toFixed(2));
                    break;
                case 'sweets':
                    console.log((quantity * 1.35).toFixed(2));
                    break;
                case 'chips':
                    console.log((quantity * 1.55).toFixed(2));
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

grocery('coffee', 'Varna', 2);
grocery('chips', 'Plovdiv', 1);
grocery('juice', 'Sofia', 6);