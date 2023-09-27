function dayOfWeek(day) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day < 1 || day > 7) {
        console.log('Invalid day!');
    } else {
        console.log(days[day - 1]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);