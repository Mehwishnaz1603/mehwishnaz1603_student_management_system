import  inquirer from 'inquirer';
import  fs from 'fs';

class Student {name: string; studentId: string; courses: string[]; balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentId = this.generateStudentId();
        this.courses = [];
        this.balance = 0;
    }
    private generateStudentId(): string {
        return Math.random().toString(36).substring(2, 7).toUpperCase();
    }
    enroll(course: string): void {
        this.courses.push(course);
        console.log(`${this.name} has been enrolled in ${course}`);
    }

    viewBalance(): void {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }

    payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`Paid $${amount}. Remaining balance: $${this.balance}`);
    }

    showStatus(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log("Courses Enrolled:");
        this.courses.forEach(course => console.log(course));
        this.viewBalance();
    }
}

interface Course {
    name: string;
    cost: number;
}

const courses: Course[] = [
    { name: "Math", cost: 100 },
    { name: "Science", cost: 150 },
    { name: "History", cost: 120 }
];

async function main() {
    const students: Student[] = [];

    while (true) {
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'Choose an option:',
            choices: [
                "Add Student",
                "Enroll Student",
                "View Balance",
                "Pay Tuition",
                "Show Status",
                "Exit"
            ]
        });

        switch (choice) {
            case "Add Student":
                const { name } = await inquirer.prompt({
                    type: 'input',
                    name: 'name',
                    message: 'Enter student name:'
                });
                const student = new Student(name);
                students.push(student);
                console.log(`Student ${name} added with ID ${student.studentId}`);
                break;

            case "Enroll Student":
                if (students.length === 0) {
                    console.log("No students available. Add a student first.");
                    break;
                }
                const { studentId, courseName } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'studentId',
                        message: 'Enter student ID:'
                    },
                    {
                        type: 'list',
                        name: 'courseName',
                        message: 'Choose course to enroll:',
                        choices: courses.map(course => course.name)
                    }
                ]);
                const studentToEnroll = students.find(student => student.studentId === studentId);
                if (studentToEnroll) {
                    const selectedCourse = courses.find(course => course.name === courseName);
                    if (selectedCourse) {
                        studentToEnroll.enroll(courseName);
                        studentToEnroll.balance += selectedCourse.cost;
                    } else {
                        console.log("Course not available.");
                    }
                } else {
                    console.log("Invalid student ID.");
                }
                break;

            case "View Balance":
                const { studentId: viewBalanceId } = await inquirer.prompt({
                    type: 'input',
                    name: 'studentId',
                    message: 'Enter student ID:'
                });
                const studentToViewBalance = students.find(student => student.studentId === viewBalanceId);
                if (studentToViewBalance) {
                    studentToViewBalance.viewBalance();
                } else {
                    console.log("Invalid student ID.");
                }
                break;

            case "Pay Tuition":
                const { studentId: payTuitionId, amount } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'studentId',
                        message: 'Enter student ID:'
                    },
                    {
                        type: 'number',
                        name: 'amount',
                        message: 'Enter amount to pay:'
                    }
                ]);
                const studentToPayTuition = students.find(student => student.studentId === payTuitionId);
                if (studentToPayTuition) {
                    studentToPayTuition.payTuition(amount);
                } else {
                    console.log("Invalid student ID.");
                }
                break;

            case "Show Status":
                const { studentId: showStatusId } = await inquirer.prompt({
                    type: 'input',
                    name: 'studentId',
                    message: 'Enter student ID:'
                });
                const studentToShowStatus = students.find(student => student.studentId === showStatusId);
                if (studentToShowStatus) {
                    studentToShowStatus.showStatus();
                } else {
                    console.log("Invalid student ID.");
                }
                break;

            case "Exit":
                console.log("Exiting program.");
                // Write student data to a file (optional)
                fs.writeFileSync('students.json', JSON.stringify(students, null, 2));
                return;

            default:
                console.log("Invalid choice. Please try again.");
                break;
        }
    }
}

main();
