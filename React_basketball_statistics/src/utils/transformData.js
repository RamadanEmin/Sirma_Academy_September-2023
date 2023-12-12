import { isCorrectData } from "./validation";

function transformStringToArray(string) {
    const arr = string.split(/(\r\n|\r|\n)/g)
        .filter(el => el.trim().length !== 0);

    return arr;
}

function transformArrayToMatrix(arr) {
    const matrix = arr.map(line => line.split(',').map(el => el.trim()));

    return matrix;
}

const prepareData = raw => {
    if (!raw) return false;
    const arr = [];
    const { data } = raw;

    for (let i = 0; i < data.length; i++) {
        data[i].min = parseInt(data[i].min)

        if (isCorrectData(data[i])) {
            arr.push({
                "Player name": data[i].player.first_name + " " + data[i].player.last_name,
                "Team": data[i].team.full_name,
                "Time played(s)": data[i].min * 60,
                "Points scored": data[i].pts,
            });
        }
    }

    return arr;
}

export {
    prepareData,
    transformStringToArray,
    transformArrayToMatrix
};