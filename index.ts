#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

interface Student{name:string; fathername:string; id:number; course:string; day:string; fees:number; balance:number};
let students: Student[] = [];
console.log(chalk.yellowBright.bold.underline("\n\t  Welcome to the Student Management System with MehwishNaz  \n\t"));

const student_Management_System = () => {
    console.log(chalk.yellowBright.underline("Choose an Option:"))
     inquirer.prompt([
    {name: 'options', type: 'list', choices: ['Add Student Information', 'List Of Student Information', 'Exit'] },
])
   .then((answers) => { switch (answers.options) {
                    case 'Add Student Information':
                          addStudentInformation();
                          break;
                    case 'List Of Student Information':
                          listOfStudentsInformation()
                          break;
                    case 'Exit':
                          console.log(chalk.yellowBright('Exiting program...'));
                          process.exit(0);
                          break;
                          default:
                          console.log('Invalid option');
    student_Management_System()   }   
        });
};
    const addStudentInformation = () => {
    inquirer.prompt([
             {name: 'name',            type: 'string',      message: 'Enter Student Name:'},
             {name: 'fathername',      type: 'string',      message: 'Enter Student Father Name:'},
             {name: 'id',              type: 'number',      message: 'Enter Student Id:'},
             {name: 'courses',         type: 'string',      message: 'Enter Student Courses:'},
             {name: 'day',             type: 'string',      message: 'Enter Student Day:'},
             {name: 'fees',            type: 'number',      message: 'Enter Student Fees:'},
             {name: 'balance',         type: 'number',      message: 'Enter Student Balance:'}
   ])
    .then((answers) => {
    const newStudent: Student = {
                    name: answers.name,
                    fathername: answers.fathername,
                    id: answers.id,
                    course: answers.course,
                    day: answers.day,
                    fees: answers.fees,
                    balance: answers.balance };
    students.push(newStudent);
    console.log(chalk.yellowBright.bold.underline(`Student ${newStudent.name} Information Added Successfully!`));
    student_Management_System();
    });
}
    const listOfStudentsInformation = () => {
    console.log('List of Students:');
    students.forEach((student) => {
    console.log(chalk.yellowBright(`name: ${student.name},id: ${student.id}, course: ${student.course},
    day: ${student.day}, fees: ${student.fees}, balance: ${student.balance}`));});
    student_Management_System();
};
    student_Management_System();
