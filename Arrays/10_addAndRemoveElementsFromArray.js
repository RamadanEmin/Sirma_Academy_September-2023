function addAndRemoveElementsFromArray(arr = []) {
    const newArray = [];
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            num++;
            newArray.push(num);
        } else if (arr[i] == 'remove') {
            newArray.pop();
        }
    }

    if (newArray.length == 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}

addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']);
addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElementsFromArray(['remove', 'remove', 'remove']);