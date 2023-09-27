function time(time) {
    let hour = Math.floor(time / 60);
    let minutes = time % 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    } 
    if(hour<10){
        hour = '0' + hour;  
    }

    console.log(`${hour} : ${minutes}`);
}

time(60);
time(90);
time(325);