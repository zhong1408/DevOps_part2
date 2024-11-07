const { Course } = require('../models/AddCourse_hasan');
const fs = require('fs').promises;

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) { console.error(err); throw err; }
}

async function writeJSON(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);
        await fs.writeFile(filename, JSON.stringify(allObjects), 'utf8');
        return allObjects;
    } catch (err) { console.error(err); throw err; }
}

async function addCourse(req, res) {
    try {
        const name = req.body.name;
        const code = req.body.code;
        const description = req.body.description;
        const credits = req.body.credits;

        
        const courses = await readJSON('utils/course.json');

        let codeExists = false;
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].code === code) {
                codeExists = true;
                break;
            }
        }

        if (codeExists) {
            return res.status(400).json({ message: 'Course code must be unique. This code already exists.' });
        }


        if (!/^[A-Z]{3}\d{3}$/.test(code) || (credits !== 3 && credits !== 4)) {
            return res.status(400).json({ message: 'Validation error: code must contain exactly three letters and three numbers and credits must be only either 3 or 4' });
        } else {
            const newCourse = new Course(name, code, description, credits);
            const updatedCourses = await writeJSON(newCourse, 'utils/course.json');
            return res.status(201).json(updatedCourses);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {

    readJSON, writeJSON, addCourse
};