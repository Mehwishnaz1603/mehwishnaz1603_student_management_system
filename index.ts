#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
interface Student{name:string; fathername:string; age:number; id:number, course:any; 
                 day:string; timing:input; duration:any;fees:number; balance:number};
let students: Student[] = [];
console.log(chalk.yellowBright.bold.underline("\n\t  Welcome to the Student Management System with MehwishNaz  \n\t"));
const student_Management_System = () => {
     inquirer.prompt([
    {name: 'options', type: 'list', message: 'Choose an Option:',
    choices: ['Add Student Information', 'List Of Student Information', 'Exit'] },
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
                     {name: 'name',   type: 'string', message: 'Enter Student Name:'},
                     {name: 'fathername', type: 'string', message: 'Enter Student Father Name:'},
                     {name: 'age',    type: 'number', message: 'Enter Student Age:',}, 
                     {name: 'id',         type: 'number', message: 'Enter Student Id:'},
                     {name: 'course', type: 'any', message: 'Enter Student Course:'},
                     {name: 'day',      type: 'string', message: 'Enter Student Day:'},
                     {name: 'timing', type: 'any',  message: 'Enter Student Timing:',},
                     {name: 'duration', type: 'any',  message: 'Enter Student Course Duration:'},
                     {name: 'fees',   type: 'number', message: 'Enter Student Fees:'},
                     {name: 'balance',    type: 'number', message: 'Enter Student Balance:'}
   ])
    .then((answers) => {
    const newStudent: Student = {
                    name: answers.name,
                    fathername: answers.fathername,
                    age: answers.age,
                    id: answers.id,
                    course: answers.course,
                    day: answers.day,
                    timing: answers.timing,
                    duration: answers.duration,
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
    console.log(chalk.yellowBright(`name: ${student.name}, fathername: ${student.fathername}, age :${student.name}, id: ${student.id}, 
    course: ${student.course}, day: ${student.day}, timig: ${student.timing}, duration: ${student.duration}, fees: ${student.fees}, 
    balance: ${student.balance}`));});
    student_Management_System();
};
    student_Management_System()