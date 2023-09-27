function architecturalEraIdentifier(year, material) {
    if (year < 500 && material === 'stone') {
        console.log('Ancient');
    } else if (500 <= year && year <= 1500 && material === 'stone') {
        console.log('Medieval');
    } else if (1500 <= year && year <= 1800 && material === 'wood') {
        console.log('Colonial');
    } else if (1800 <= year && year <= 1900 && material === 'steel') {
        console.log('Industrial');
    } else if (year >= 1900 && material === 'steel') {
        console.log('Modern');
    } else {
        console.log('Uncertain');
    }
}

architecturalEraIdentifier(300, 'stone');
architecturalEraIdentifier(1500, 'wood');
architecturalEraIdentifier(1500, 'stone');
architecturalEraIdentifier(2000, 'steel');
architecturalEraIdentifier(1100, 'wood');