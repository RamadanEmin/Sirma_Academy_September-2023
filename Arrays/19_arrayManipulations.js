function arrayManipulations(input = []) {
    const arr = input.shift().split(' ').map(Number);


    for (let operations of input) {
        let [operation, param1, param2] = operations.split(' ');
        param1 = Number(param1);

        switch (operation) {
            case 'Add':
                arr.push(param1);
                break;
            case 'Remove':
                let index = arr.indexOf(2);
                arr.splice(index, 1);
                break;
            case 'RemoveAt':
                arr.splice(param1, 1);
                break;
            case 'Insert':
                param2 = Number(param2);
                arr.splice(param2,0, param1);
                break;
            default:
                break;
        }
    }

    console.log(arr.join(' '));
}

arrayManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"
]);
