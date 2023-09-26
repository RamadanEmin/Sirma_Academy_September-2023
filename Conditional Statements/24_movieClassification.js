function movieClassification(age) {
    if (age < 13) {
        console.log('U-rated movies');
    } else if (age < 18) {
        console.log('PG-13 rated movies');
    } else {
        console.log('All movies');
    }
}

movieClassification(10);
movieClassification(16);
movieClassification(21);