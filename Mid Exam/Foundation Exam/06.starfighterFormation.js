function starfighterFormation(starfighter = [], input = []) {
    const formation = starfighter.slice();
    const commands = {
        destroy: (index) => {
            if (0 <= index && index < formation.length) {
                formation.splice(index, 1);
                console.log(formation.join(' '));
            }
        },
        swap: (index1, index2) => {

            if (0 <= index1 && index1 < formation.length && 0 <= index2 && index2 < formation.length && index1 !== index2) {
                let temp = formation[index1];
                formation[index1] = formation[index2]
                formation[index2] = temp;
                console.log(formation.join(' '));
            }
        },
        add: (id) => {
            formation.push(id);
            console.log(formation.join(' '));
        },
        insert: (id, index) => {
            if (0 <= index && index <= formation.length) {
                formation.splice(index, 0, id);
                console.log(formation.join(' '));
            }
        },
        center: () => {
            if (formation.length % 2 === 0) {
                console.log(`${formation[(formation.length / 2) - 1]} ${formation[(formation.length / 2)]}`);
            } else {
                console.log(`${formation[Math.floor(formation.length / 2)]}`);
            }
        }
    };

    for (let line of input) {
        let [command, param1, param2] = line.split(' ');
        param1 = Number(param1);
        param2 = Number(param2);
        commands[command](param1, param2);
    }
}

starfighterFormation(
    [1, 2, 3, 4, 5],
    [
        "destroy 3",
        "swap 0 1",
        "add 6",
        "center"
    ]);

starfighterFormation(
    [1, 2, 3, 4, 5],
    [
        "add 6",
        "swap 0 5",
        "swap 1 4",
        "swap 2 3",
        "swap 2 100",
        "swap 2 2",
        "center"
    ]);

starfighterFormation(
    [1, 2],
    [
        "insert 3 2",
        "center",
        "destroy 1",
        "destroy 2",
        "center"
    ]);