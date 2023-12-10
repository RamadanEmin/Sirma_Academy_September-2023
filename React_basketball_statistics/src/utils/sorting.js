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

export {
    playerPointScoreInOneGameSorting,
    mostPointScoredPlayerSorting,
};