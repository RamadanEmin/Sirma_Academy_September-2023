function time(time) {
    const hour = Math.floor(time / 60);
    const minutes = time % 60;
    console.log(`${hour} : ${minutes}`);
}

time(60);
time(90);
time(325);