function painting(yellow) {
    const red = yellow / 4;
    const white = yellow * 2;

    console.log(`Red: ${red}`);
    console.log(`Yellow: ${yellow}`);
    console.log(`White: ${white}`);
    console.log(`Total: ${red + yellow + white}`);
}

painting(10);
painting(17);
painting(42);