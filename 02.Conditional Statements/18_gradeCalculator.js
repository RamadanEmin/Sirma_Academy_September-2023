function gradeCalculator(percentage) {
    let grade;
    if (percentage < 60) {
        grade = 'F';
    } else if (percentage < 70) {
        grade = 'D';
    } else if (percentage < 80) {
        grade = 'C';
    } else if (percentage < 90) {
        grade = 'B';
    } else {
        grade = 'A';
    }

    console.log(grade);
}

gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);