function movieTicketPrice(age) {
    let price;

    if (age < 13) {
        price = 5;
    } else if (age < 20) {
        price = 8;
    } else {
        price = 10;
    }

    console.log('$' + price);
}

movieTicketPrice(10);
movieTicketPrice(16);
movieTicketPrice(25);
movieTicketPrice(13);