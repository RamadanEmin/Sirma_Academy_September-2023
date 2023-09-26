function encoding(n) {
    let num = n.toString();
    let char;

    for (let i = num.length - 1; i >= 0; i--) {
        char = Number(num[i]);
        if (char == 0) {
            console.log('ZERO');
        } else {
            let print = '';
            for (let j = 1; j <= char; j++) {
                print += String.fromCharCode(33 + char);
            }

            console.log(print);
        }
    }
}

encoding(2049);
encoding(9347439);