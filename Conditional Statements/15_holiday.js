function holiday(budget, season) {
    let destination;
    let room;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            room = 'camping';
            budget *= 0.30;
        } else {
            room = 'hotel';
            budget *= 0.70;
        }
    } else if (budget < 1000) {
        destination = 'Europe';
        if (season === 'summer') {
            room = 'camping';
            budget *= 0.40;
        } else {
            room = 'hotel';
            budget *= 0.80;
        }
    } else {
        destination = 'Asia';
        room = 'hotel';
        budget *= 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${room} - ${budget.toFixed(2)}`);
}

holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");