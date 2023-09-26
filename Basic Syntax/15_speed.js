function speed(distance, hours, minutes, seconds) {
    const time = hours * 60 * 60 + minutes * 60 + seconds;
    console.log((distance / time).toFixed(6));
}

speed(100, 1, 20, 20);
speed(2500, 5, 56, 23);
speed(600, 7, 35, 55);