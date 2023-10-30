function pathsThroughMoria(list = [], input = []) {
    const formation = list.slice();
    const commands = {
        remove: (path) => {
            let index = formation.indexOf(path);
            if (index > -1) {
                formation.splice(index, 1);
                console.log(formation.join(' '));
            }
        },
        swap: (index1, index2) => {
            index1 = Number(index1);
            index2 = Number(index2);

            if (0 <= index1 && index1 < formation.length && 0 <= index2 && index2 < formation.length && index1 !== index2) {
                let temp = formation[index1];
                formation[index1] = formation[index2]
                formation[index2] = temp;
                console.log(formation.join(' '));
            }
        },
        add: (path) => {
            formation.push(path);
            console.log(formation.join(' '));
        },
        insert: (path, index) => {
            index = Number(index);

            if (0 <= index && index <= formation.length) {
                formation.splice(index, 0, path);
                console.log(formation.join(' '));
            }
        },
        print: () => {
            if (formation.length % 2 === 0) {
                console.log(`${formation[(formation.length / 2) - 1]} ${formation[(formation.length / 2)]}`);
            } else {
                console.log(`${formation[Math.floor(formation.length / 2)]}`);
            }
        }
    };

    for (let line of input) {
        let [command, param1, param2] = line.split(' ');
        commands[command](param1, param2);
    }
}

pathsThroughMoria(["West-door", "Bridge", "Khazad-dûm"],
    ["insert Balin's-Tomb 1",
        "remove Khazad-dûm",
        "add East-gate",
        "swap 0 2",
        "print middle"])


pathsThroughMoria(["Durin's-Bane", "Gandalf's-Fall"],
    ["insert Mirror 0",
        "remove Gandalf's-Fall",
        "swap 0 1",
        "print middle"])

pathsThroughMoria(["Book", "Orcs"],
    ["insert Troll 0",
        "insert Gollum -1",
        "remove Book",
        "add Shadows",
        "insert Light 2",
        "swap 100 2",
        "print middle"])

pathsThroughMoria(["Drums", "Shadows"],
    ["add Dark",
        "insert Light 3",
        "remove Drums",
        "swap 1 0",
        "print middle"])

pathsThroughMoria(["Gate", "Bridge"],
    ["add Stairs",
        "insert Hall 1",
        "swap 2 0",
        "print middle"])

