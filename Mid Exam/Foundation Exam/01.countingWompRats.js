function countingWompRats(n, m, h) {
    let total = n;
    for (let i = 1; i < h; i++) {
        total += n + i * m;
    }
    console.log(total);
}

// countingWompRats(5, 2, 3);
// countingWompRats(7, 1, 2);
// countingWompRats(10, -1, 1);
// countingWompRats(8, -2, 3);