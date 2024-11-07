const { Student } = require('../models/Student');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8')
        return JSON.parse(data);
    } catch(err) {
        console.error(err); throw err;
    }
}

async function writeJson(object, filename){
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);

        await fs.writeFile(filename, JSON.stringify(allObjects), 'utf8');
        return allObjects;
    } catch(err){
        console.error(err); throw err;
    }
}

async function generateid(){
    const students = await readJSON('utils/students.json');
    let id;
    let uniqueid = false;

    while (!uniqueid){
        id = uuidv4().slice(0,5)
        uniqueid = !students.some(student => student.id ==id);
    }
    return id;
}

async function addstudent(req, res){
    try{
        const name = req.body.name;
        const age = req.body.age;
        const course = req.body.course;
        const email = req.body.email;

        const student_email = await readJSON('utils/students.json');

        if (!email.includes('@')  || !email.includes('.')){
            return res.status(500).json({Message: "Validation error"});
        } 

        const existingemail = student_email.some(student=> student.email == email)
        if (existingemail){
            return res.status(400).json({ message: " Email with user already exists"})
        }

        const id = await generateid();
        const newStudent = new Student (name,id,age,course,email);
        const updatedStudent = await writeJson(newStudent, 'utils/students.json');
        return res.status(201).json(updatedStudent)
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}

async function viewStudent(req,res){
    try{
        const allStudents = await readJSON('utils/students.json');
        return res.status(201).json(allStudents);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    readJSON, writeJson, addstudent, viewStudent
}