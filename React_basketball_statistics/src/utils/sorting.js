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

function teamSorting(data) {
    let sortedData;
    if (data.length > 0) {
        const teamsPoints = data.reduce((acc, cur) => {
            const [, team, , points] = cur;
            if (acc[team]) {
                acc[team] = acc[team] + +points;
            } else {
                acc[team] = +points;
            }

            return acc;
        }, {});

        sortedData = Object.entries(teamsPoints)
            .sort((a, b) => b[1] - a[1]);
    }

    return sortedData;
}

function bestPlayerSorting(data) {
    let sortedData;
    if (data.length > 0) {
        const teams = {};

        data.forEach(row => {
            if (!teams[row[1]]) {
                teams[row[1]] = {
                    [row[0]]: Number(row[3]),
                };
            } else {
                if (!teams[row[1]][row[0]]) {
                    teams[row[1]][row[0]] = Number(row[3]);
                } else {
                    teams[row[1]][row[0]] += Number(row[3]);
                }
            }
        });

        const bestPlayers = [];
        for (let key in teams) {
            teams[key] = Object.entries(teams[key]).sort((a, b) => b[1] - a[1]);
            bestPlayers.push([key, teams[key][0][0], teams[key][0][1]]);
        }

        bestPlayers.sort((a, b) => b[2] - a[2]);

        sortedData = bestPlayers;

        return sortedData;
    }
}

export {
    playerPointScoreInOneGameSorting,
    mostPointScoredPlayerSorting,
    bestPlayerScoreSrotingByTime,
    teamSorting,
    bestPlayerSorting
};