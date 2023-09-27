function daysInAMonth(month) {
    let day;

    if (month === 2) {
        day = 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        day = 30;
    } else {
        day = 31;
    }

    console.log(day);
}

daysInAMonth(1);
daysInAMonth(2);
daysInAMonth(4);
daysInAMonth(7);