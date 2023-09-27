function change(amount) {
    let coin = 0;

        if (amount >= 2) {
            coin += Math.floor(amount / 2);
            amount %= 2;
        }
        if (amount >= 1) {
            coin += Math.floor(amount / 1);
            amount %= 1;
        }
        if (amount >= 0.5) {
            coin += Math.floor(amount / 0.5);
            amount %= 0.5;
        }
        if (amount >= 0.2) {
            coin += Math.floor(amount / 0.2);
            amount %= 0.2;
        }
        if (amount >= 0.1) {
            coin += Math.floor(amount / 0.1);
            amount %= 0.1;
        }
        if (amount >= 0.05) {
            coin += Math.floor(amount / 0.05);
            amount %= 0.05;
        }
        if (amount >= 0.01) {
            coin += Math.floor(amount / 0.01);
            amount %= 0.01;
        }
    
    console.log(coin);
}

change(1.23);
change(2);
change(0.56);
change(2.73);