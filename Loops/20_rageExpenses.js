function rageExpenses(lost, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
    let expenses = 0;
    let trashesCount = 0;

    for (let i = 1; i < lost; i++) {
        if (i % 2 == 0) {
            expenses += headsetPrice;
        }
        if (i % 3 == 0) {
            expenses += mousePrice;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            trashesCount++;
            expenses += keyboardPrice;
        }
    }

    expenses += Math.floor(trashesCount / 2) * displayPrice;

    console.log(`Rage expenses: ${expenses.toFixed(2)} lv.`);
}

rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.50, 21.50, 40, 200);