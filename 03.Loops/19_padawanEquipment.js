function padawanEquipment(money, studentsCount, lightsabersPrice, robePrice, beltPrice) {
    let freeBelt = 0;

    for (let i = 1; i <= studentsCount; i++) {
        if (i % 6 == 0) {
            freeBelt += beltPrice;
        }
    }

    let totalSum = lightsabersPrice * (studentsCount + Math.ceil(studentsCount * 0.1)) + studentsCount * (robePrice + beltPrice) - freeBelt;

    if (totalSum <= money) {
        console.log(`The money is enough - it would cost ${totalSum.toFixed(2)}lv.`);
    } else {
        console.log(`George Lucas will need ${(totalSum - money).toFixed(2)}lv more.`);
    }
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);