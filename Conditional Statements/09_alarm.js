function alarm(hour, minutes) {
    if (minutes + 15 >= 60) {
        hour++;
        minutes = minutes + 15 - 60;
    } else {
        minutes = minutes + 15;
    }

    if (hour >= 24) {
        hour = 0;
    }

    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
}

alarm(1, 47);
alarm(0, 2);
alarm(23, 59);
alarm(11, 7);
alarm(12, 48);