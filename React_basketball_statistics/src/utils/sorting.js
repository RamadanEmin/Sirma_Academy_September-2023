function playerPointScoreInOneGameSorting(data){
    let sortedData;

    if (data.length > 0) {
        sortedData = [...data].sort((a, b) => +b[3] - +a[3]);
    }

    return sortedData;
}

function mostPointScoredPlayerSorting(data) {
    let sortedData;
    if (data.length > 0) {
        const playerPoints = data.reduce((acc, cur) => {
            const [player, , , points] = cur;
            if (acc[player]) {
                acc[player] += Number(points);
            } else {
                acc[player] = Number(points);
            }

            return acc;
        }, {});

        sortedData = Object.entries(playerPoints)
            .sort((a, b) => b[1] - a[1]);
    }

    return sortedData;
}

function bestPlayerScoreSrotingByTime(data) {
    let sortedData;
    if (data.length > 0) {
        sortedData = data.map(row => [...row]);

        sortedData.map(row => {
            const pointsPerSecond = Number(row[3]) / Number(row[2]);
            row.push(pointsPerSecond.toFixed(3));

            return row;
        });

        sortedData.sort((a, b) => b[4] - a[4]);
    }

    return sortedData;
}

export {
    playerPointScoreInOneGameSorting,
    mostPointScoredPlayerSorting,
    bestPlayerScoreSrotingByTime,
};