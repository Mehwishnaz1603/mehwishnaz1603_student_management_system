#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
;
let students = [];
console.log(chalk.yellowBright.bold.underline("\n\t  Welcome to the Student Management System with MehwishNaz  \n\t"));
const student_Management_System = () => {
    inquirer.prompt([
        { name: 'options', type: 'list', message: 'Choose an Option:',
            choices: ['Add Student Information', 'List Of Student Information', 'Exit'] },
    ])
        .then((answers) => {
        switch (answers.options) {
            case 'Add Student Information':
                addStudentInformation();
                break;
            case 'List Of Student Information':
                listOfStudentsInformation();
                break;
            case 'Exit':
                console.log(chalk.yellowBright('Exiting program...'));
                process.exit(0);
                break;
            default:
                console.log('Invalid option');
                student_Management_System();
        }
    });
};
const addStudentInformation = () => {
    inquirer.prompt([
        { name: 'name', type: 'string', message: 'Enter Student Name:' },
        { name: 'fathername', type: 'string', message: 'Enter Student Father Name:' },
        { name: 'age', type: 'number', message: 'Enter Student Age:', },
        { name: 'id', type: 'number', message: 'Enter Student Id:' },
        { name: 'course', type: 'string', message: 'Enter Student Course:' },
        { name: 'day', type: 'string', message: 'Enter Student Day:' },
        { name: 'timing', type: 'input', message: 'Enter Student Timing:', },
        { name: 'duration', type: 'input', message: 'Enter Student Course Duration:' },
        { name: 'fees', type: 'number', message: 'Enter Student Fees:' },
        { name: 'balance', type: 'number', message: 'Enter Student Balance:' }
    ])
        .then((answers) => {
        const newStudent = {
            name: answers.name,
            fathername: answers.fathername,
            id: answers.id,
            age: answers.age,
            course: answers.course,
            day: answers.day,
            timing: answers.timing,
            duration: answers.duration,
            fees: answers.fees,
            balance: answers.balance
        };
        students.push(newStudent);
        console.log(chalk.yellowBright.bold.underline(`Student ${newStudent.name} Information Added Successfully!`));
        student_Management_System();
    });
};
const listOfStudentsInformation = () => {
    console.log('List of Students:');
    students.forEach((student) => {
        console.log(chalk.yellowBright(`name: ${student.name}, id: ${student.id}, age :${student.name}, course: ${student.course},
    day: ${student.day}, timig: $ {student.timing}, duration: ${student.duration}, fees: ${student.fees}, balance: ${student.balance}`));
    });
    student_Management_System();
};
student_Management_System();
