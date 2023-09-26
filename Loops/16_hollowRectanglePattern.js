function hollowRectanglePattern(rows, columns) {
    for (let i = 1; i <= rows; i++) {
        let result = '';
        for (let j = 1; j <= columns; j++) {
            if (i == 1 || j == 1 || i == rows || j == columns) {
                result += '*';
            } else {
                result += ' ';
            }
        }

        console.log(result);
    }
}

hollowRectanglePattern(4, 6);
hollowRectanglePattern(2, 2);
hollowRectanglePattern(3, 4);