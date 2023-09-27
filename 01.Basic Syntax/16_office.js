function office(cabinet) {
    const secondCabinet = cabinet * 0.80;
    const thirdCabinet = (cabinet + secondCabinet) * 1.15;
    const total = cabinet + secondCabinet + thirdCabinet;

    console.log(total.toFixed(3));
}

office(380);
office(720.50);
office(455.30);