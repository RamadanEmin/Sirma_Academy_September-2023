function carCompany(input = []) {
    const cars = {};

    for (const line of input) {
        const [brand, model, produced] = line.split(' | ').map(e => isNaN(e) ? e : Number(e));

        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
        }
        if (!cars[brand].hasOwnProperty(model)) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += produced;
    }

    for (let brand in cars) {
        console.log(brand);

        for(let model in cars[brand]) {
            console.log(`###${model} -> ${cars[brand][model]}`);
        }
    }
}

carCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);