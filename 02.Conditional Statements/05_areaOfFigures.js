function areaOfFigures(figure, a, b) {
    let area;
    switch (figure) {
        case 'square':
            area = Math.pow(a, 2);
            break;

        case 'rectangle':
            area = a * b;
            break;
        case 'triangle':
            area = (a * b) / 2;
            break;
        case 'circle':
            area =  Math.PI * Math.pow(a, 2);
            break;
        default:
            break;
    }

    console.log(area.toFixed(2));
}

areaOfFigures('square', 5);
areaOfFigures('rectangle', 10, 3.5);
areaOfFigures('triangle', 4.5, 20);
areaOfFigures('circle', 10);