function armstrongNumberCheck(n) {
    let num = n.toString();
    let armstrongNumber = 0;

    for (let i = 0; i < num.length; i++) {
        armstrongNumber += Math.pow(num[i], num.length);
    }

    if (n === Number(armstrongNumber)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

armstrongNumberCheck(153);
armstrongNumberCheck(370);
armstrongNumberCheck(123);
armstrongNumberCheck(407);
armstrongNumberCheck(1634);