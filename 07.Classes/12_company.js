class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name === '' || salary === '' || position === '' || department === ''
            || name === undefined || salary === undefined || position === undefined || department === undefined
            || name === null || salary === null || position === null || department === null || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        const employee = { name, salary, position };
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartmentName = "";
        let bestDepartmentSalary = 0;
        let result = '';

        for (let department in this.departments) {
            const departmentEmployees = this.departments[department];
            const totalSalary = departmentEmployees.reduce((sum, employee) => sum + employee.salary, 0);
            const averageSalary = totalSalary / departmentEmployees.length;

            if (averageSalary > bestDepartmentSalary) {
                bestDepartmentName = department;
                bestDepartmentSalary = averageSalary;
            }
        }

        const bestDepartmentEmployees = this.departments[bestDepartmentName].sort((a, b) => b.salary - a.salary
            || b.name.localeCompare(a.name));

        result += `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${bestDepartmentSalary.toFixed(2)}\n`;
        for (let { name, salary, position } of bestDepartmentEmployees) {
            result += `${name} ${salary} ${position}\n`;
        }

        return result;
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "cleaner", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// Best Department is: Construction
// Average salary: 1500.00
// Stanley 2000 architect
// Stamat 2000 engineer
// Peter 1500 electrical engineer
// Martin 500 cleaner