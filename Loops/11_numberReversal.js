function numberReversal(n) {
    let num = n.toString();
    let reverse = '';

    for (let i = num.length - 1; i >= 0; i--) {
        reverse += num[i];
    }

    console.log(reverse);
}

numberReversal(123);
numberReversal(9876);
numberReversal(505);
numberReversal(10203);
numberReversal(7);