#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let students = [];
console.log(chalk.yellowBright.bold.underline("\n\t  Welcome to the Student Management System with MehwishNaz  \n\t"));
const student_Management_System = () => {
    inquirer.prompt([
        { name: 'option', type: 'list', mesage: 'Choose an option:',
            choices: ['Add Student Information', 'List Of Students Information', 'Exit'] },
    ])
        .then((answers) => {
        switch (answers.option) {
            case 'Add Student Information':
                addStudentInformation();
                break;
            case 'List Of Students Information':
                listOfStudentsInformation();
                break;
            case 'Exit':
                console.log('Exiting program...');
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
        console.log(chalk.yellowBright.bold.underline(`Student ${newStudent.name} Information Added Successfully!`));
        student_Management_System();
    });
};
const listOfStudentsInformation = () => {
    console.log('List of Students:');
    students.forEach((student) => {
        console.log(chalk.yellowBright.bold(`name: ${student.name},id: ${student.id}, course: ${student.courses},
 grade: ${student.grade}, fees: ${student.fees}, Balance: ${student.balance}`));
    });
    student_Management_System();
};
student_Management_System();
