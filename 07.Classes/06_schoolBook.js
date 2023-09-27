const dataOne = [
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
];

class SchoolRegister {
    static PASSING_GRADE = 3;

    constructor(data) {
        this.school = {};
        this.processRawData(data);
    }

    processRawData(rawData) {
        rawData.forEach((item) => {
            const student = this.createStudent(item);
            const newGrade = student.grade + 1;
            if (this.isPassingGrade(student.averageScore)) {
                if (!this.school[newGrade]) {
                    this.school[newGrade] = {
                        students: [],
                        totalScore: 0
                    }
                }

                this.school[newGrade].students.push(student.name);
                this.school[newGrade].totalScore += student.averageScore;
            }
        })
    }

    isPassingGrade(grade) {
        return grade >= SchoolRegister.PASSING_GRADE;
    }

    createStudent(string) {
        const arr = string.split(',').map((str) => {
            return str.split(': ')[1]
        });

        return {
            name: arr[0],
            grade: +arr[1],
            averageScore: +arr[2],
        }
    }

    printSchool() {
        for (let key of Object.keys(this.school)) {
            console.log(`${key} Grade`);
            console.log(`List of students: ${this.school[key].students.toString()}`);

            const gradeAverage = this.school[key].totalScore / this.school[key].students.length;
            console.log(`Average annual score from last year: ${gradeAverage.toFixed(2)}`);
            console.log('===');
        }
    }
}

const school = new SchoolRegister(dataOne);
console.log(school.printSchool());

// function schoolBook(input = []) {
//     const studentsByGrade = new Map();
//     const gradeSum = new Map();

//     for (const line of input) {
//         let tokens = line.split(', ');
//         let name = tokens[0].split(': ')[1];
//         let grade = tokens[1].split(': ')[1];
//         let score = tokens[2].split(': ')[1];
//         score = Number(score);

//         if (score >= 3) {
//             if (!studentsByGrade.has(grade)) {
//                 studentsByGrade.set(grade, []);
//                 gradeSum.set(grade, 0);
//             }

//             studentsByGrade.get(grade).push(name);
//             gradeSum.set(grade, gradeSum.get(grade) + score);
//         }
//     }

//     const sortedGrades = Array.from(studentsByGrade.keys()).sort((a, b) => a - b);

//     for (let grade of sortedGrades) {
//         const students = studentsByGrade.get(grade);
//         const average = gradeSum.get(grade)/students.length;

//         console.log(`${++grade} Grade`);
//         console.log(`List of students: ${students.join(', ')}`);
//         console.log(`Average annual score from last year: ${average.toFixed(2)}`);
//         console.log('===');
//     }
// }

// schoolBook(([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]);

// schoolBook([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]);