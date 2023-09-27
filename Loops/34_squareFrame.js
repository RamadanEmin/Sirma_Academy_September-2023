function squareFrame(n) {
    // Top frame
    let topFrame = "+";
    for (let i = 0; i < n - 2; i++) {
        topFrame += " -";
    }
    topFrame += " +";
    console.log(topFrame);

    // Middle section
    for (let i = 0; i < n - 2; i++) {
        let middle = "|";
        for (let j = 0; j < n - 2; j++) {
            middle += " -";
        }
        middle += " |";
        console.log(middle);
    }

    // Bottom frame
    if (n > 1) {
        let bottomFrame = "+";
        for (let i = 0; i < n - 2; i++) {
            bottomFrame += " -";
        }
        bottomFrame += " +";
        console.log(bottomFrame);
    }


}

squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);