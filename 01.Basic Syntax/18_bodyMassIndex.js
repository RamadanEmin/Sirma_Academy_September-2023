function bodyMassIndex(weight, height) {
    console.log((weight / Math.pow(height, 2)).toFixed(2));
}

bodyMassIndex(70, 1.73);
bodyMassIndex(60, 1.75);
bodyMassIndex(85, 1.80);