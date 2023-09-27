function electricityBill(unitsConsumed, ratePerUnit) {
    console.log(((unitsConsumed * ratePerUnit) + 10).toFixed(2));
}

electricityBill(100, 1.0);
electricityBill(200, 1.0);
electricityBill(150, 1.1);