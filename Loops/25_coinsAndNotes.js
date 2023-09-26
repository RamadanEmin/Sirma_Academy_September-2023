function coinsAndNotes(oneLvCoin, twoLvCoin, fiveLvBanknote, sum) {
    for (let i = 0; i <= oneLvCoin; i++) {
        for (let j = 0; j <= twoLvCoin; j++) {
            for (let k = 0; k <= fiveLvBanknote; k++) {
                if (i + j * 2 + k * 5 == sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

coinsAndNotes(3, 2, 3, 10);
coinsAndNotes(5, 3, 1, 7);