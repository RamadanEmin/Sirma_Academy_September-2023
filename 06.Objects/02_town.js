function town(obj = {}) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

town({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
});