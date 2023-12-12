function checkForValidData(data){
    data.forEach((row, index) => {

        if (row.length !== 4) {
            alert(`Invalid data on line ${index + 1}`);
        }

        for (let i = 2; i < 4; i++) {
            if (isNaN(Number(row[i]))) {
                alert(`Data on line ${index + 1}, position ${i + 1} must be a number.`);
            }
        }
    });
}

const isCorrectData = item => {
    if(item?.player?.first_name && item?.player?.last_name && item?.team.full_name && item.min && item.min > 0 && item.pts){
        return true;
    }
        return false
}

const validFileFormats = ["csv", "json","txt"]

export {checkForValidData, validFileFormats,isCorrectData};
