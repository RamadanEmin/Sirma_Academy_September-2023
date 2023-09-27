function progressBar(num) {
    const percentage = '%'.repeat(num / 10);
    const dots = '.'.repeat((100 - num) / 10);

    console.log(`${num}% [${percentage}${dots}]`);

    if (num == 100) {
        console.log('Complete!');
    } else {
        console.log('Loading...');
    }
}

progressBar(30);
progressBar(50);
progressBar(100);