function newBuilding(floorsNumber, roomsNumber) {
    for (let i = floorsNumber; i > 0; i--) {
        let building = '';
        let type = i == floorsNumber ? 'L' : i % 2 == 0 ? 'O' : 'A';
        for (let j = 0; j < roomsNumber; j++) {
            building += `${type}${i}${j} `;
        }
        console.log(building);
    }
}

newBuilding(6, 4);
newBuilding(3, 3);
newBuilding(4, 4);