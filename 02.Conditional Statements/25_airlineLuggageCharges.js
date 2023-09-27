function airlineLuggageCharges(weight, dimensions) {
    let fee = 0;
    let reason = [];

    if (weight > 50) {
        fee += 100;
        reason.push('Overweight');
    }
    if (dimensions > 158) {
        if (dimensions<178) {
            fee += 50;
        } else if(dimensions<208) {
            fee += 100;
        }else {
            fee += 200;
        }
        reason.push('Oversize');
    }
    if(weight > 50 && dimensions > 158){
        fee += 50;
        reason.push('Handling');
    }

    console.log(`$${fee} (${reason.join(' + ')})`);
}


airlineLuggageCharges(52, 160);
airlineLuggageCharges(48, 180);
airlineLuggageCharges(55, 190);