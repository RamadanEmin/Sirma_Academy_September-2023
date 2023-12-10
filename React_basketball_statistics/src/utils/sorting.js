function playerPointScoreInOneGameSorting(data){
    let sortedData;

    if (data.length > 0) {
        sortedData = [...data].sort((a, b) => +b[3] - +a[3]);
    }

    return sortedData;
}