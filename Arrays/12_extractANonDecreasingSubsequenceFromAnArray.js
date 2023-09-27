function extractANonDecreasingSubsequenceFromAnArray(arr = []) {
    const result = [];
    let currentLargestElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (currentLargestElement <= arr[i]) {
            currentLargestElement=arr[i];
            result.push(arr[i]);
        }
    }

    console.log(result.join(' '));
}

extractANonDecreasingSubsequenceFromAnArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractANonDecreasingSubsequenceFromAnArray([1, 2, 3, 4]);
extractANonDecreasingSubsequenceFromAnArray([20, 3, 2, 15, 6, 1]);