function equalArrays(arr1 = [], arr2 = []) {
    let isEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) !== Number(arr2[i])) {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
        }
    }

    if (isEqual) {
        const sum = arr1.map(Number).reduce((a, b) => a + b, 0);
        console.log(`Arrays are identical. Sum: ${sum}`);
    } 
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);