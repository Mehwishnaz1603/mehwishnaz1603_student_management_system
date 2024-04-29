import inquirer from 'inquirer';
let students = [];
function addStudent() {
    inquirer.prompt([
        { name: 'name', type: 'string', message: 'Enter Student Name:' },
        { name: 'id', type: 'number', message: 'Enter Student Id:' },
        { name: 'courses', type: 'string', message: 'Enter Student Courses:' },
        { name: 'class', type: 'string', message: 'Enter Student Class:' },
        { name: 'fees', type: 'number', message: 'Enter Student Fees:' },
        { name: 'balance', type: 'number', message: 'Enter Student Balance:' }
    ])
        .then((answers) => {
        const newStudent = {
            name: answers.name,
            id: answers.id,
            courses: answers.course,
            grade: answers.grade,
            fees: answers.fees,
            balance: answers.balance
        };
        students.push(newStudent);
        console.log(`Student ${newStudent.name} Information Added Successfully!`);
        mainMenu();
    });
}
function listStudents() {
    console.log('List of Students:');
    students.forEach((student) => {
        console.log(`name: ${student.name},id: ${student.id}, course: ${student.courses},
        grade: ${student.grade}, fees: ${student.fees}, Balance: ${student.balance}`);
    });
    mainMenu();
}
function mainMenu() {
    inquirer.prompt([
        { name: 'option', type: 'list', mesage: 'Choose an option:',
            choices: ['Add Student Information', 'List Of Students Information', 'Exit'] },
    ])
        .then((answers) => {
        switch (answers.option) {
            case 'Add Student':
                addStudent();
                break;
            case 'List Students':
                listStudents();
                break;
            case 'Exit':
                console.log('Exiting program...');
                process.exit(0);
                break;
            default:
                console.log('Invalid option');
                mainMenu();
        }
    });
}
console.log('Welcome to the Student Management System');
mainMenu();
