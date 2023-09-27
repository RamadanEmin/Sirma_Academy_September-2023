function atSea(daysToStay, typeOfRoom, assessment) {
    const night = daysToStay - 1;
    let price;

    if (daysToStay < 10) {
        switch (typeOfRoom) {
            case 'single room':
                price = 25 * night;
                break;
            case 'apartment':
                price = 50 * night * 0.70;
                break;
            case 'president apartment':
                price = 100 * night * 0.90;
                break;

            default:
                break;
        }
    } else if (daysToStay <= 15) {
        switch (typeOfRoom) {
            case 'single room':
                price = 25 * night;
                break;
            case 'apartment':
                price = 50 * night * 0.65;
                break;
            case 'president apartment':
                price = 100 * night * 0.85;
                break;

            default:
                break;
        }
    } else {
        switch (typeOfRoom) {
            case 'single room':
                price = 25 * night;
                break;
            case 'apartment':
                price = 50 * night * 0.50;
                break;
            case 'president apartment':
                price = 100 * night * 0.80;
                break;

            default:
                break;
        }
    }

    if (assessment === 'positive') {
        price *= 1.25;
    } else {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
}

atSea(11, "apartment", "positive");
atSea(30, "president apartment", "negative");
atSea(12, "single room", "positive");
atSea(2, "apartment", "positive");