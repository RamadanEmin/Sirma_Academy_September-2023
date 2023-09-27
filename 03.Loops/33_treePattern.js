function treePattern(n) {
    let pattern = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            pattern += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += "*";
        }
        pattern += "\n";
    }

    for (let i = 1; i <= n * 2 - 1; i++) {
        if (i === n) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }

    console.log(pattern);
}

treePattern(6);
treePattern(4);
treePattern(3);