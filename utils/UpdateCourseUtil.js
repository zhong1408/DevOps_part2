const { Course } = require('../models/UpdateCourse');
const fs = require('fs').promises;

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {  }
}
async function updateCourse(req, res) {
    try {
        const id = req.params.id;
        const { name, code, description, credits } = req.body;

        // Validate all fields are provided
        if (!name || !code || !description || !credits) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const codePattern = /^[A-Z]{3}\d{3}$/;
        if (!codePattern.test(code)) {
            return res.status(400).json({ message: 'Code must be 3 uppercase followed by 3 numbers' });
        }


        const allCourses = await readJSON('utils/course.json');

        // Check for duplicate course codes
        const duplicate = allCourses.find(course => course.code === code && course.id !== id);
        if (duplicate) {
            return res.status(400).json({ message: 'Course code already exists!' });
        }

        let modified = false;

        for (let i = 0; i < allCourses.length; i++) {
            let currentCourse = allCourses[i];
            if (currentCourse.id == id) {
                allCourses[i].name = name;
                allCourses[i].code = code;
                allCourses[i].description = description;
                allCourses[i].credits = credits;
                modified = true;
            }
        }

        if (modified) {
            await fs.writeFile('utils/course.json', JSON.stringify(allCourses, null, 2), 'utf8');
            return res.status(201).json({ message: 'Course modified successfully!' });
        } else {       }
    } catch (error) {
    }
}
module.exports = {
    readJSON, 
    updateCourse
};