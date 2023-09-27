function printEveryNElementFromAnArray(arr = [], step) {
    let newArray = [];

    for (let i = 0; i < arr.length; i += step) {
        newArray.push(arr[i]);
    }

    console.log(newArray.join(' '));
}

printEveryNElementFromAnArray(['5', '15', '31', '14', '20'], 2);
printEveryNElementFromAnArray(['dsa', 'asd', 'demo', 'test'], 2);
printEveryNElementFromAnArray(['1', '2', '3', '4', '5'], 6);