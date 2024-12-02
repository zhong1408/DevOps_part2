const { Course } = require('../models/UpdateCourse');
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

async function viewCourses(req, res) {
    try {
        const allCourses = await readJSON('utils/course.json');
        return res.status(201).json(allCourses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function updateCourse(req, res) {
    try {
        const id = req.params.id;
        const { name, code, description, credits } = req.body;

        // Validate all fields are provided
        if (!name || !code || !description || !credits) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        // Validate course code format
        const codePattern = /^[A-Z]{3}\d{3}$/;
        if (!codePattern.test(code)) {
            return res.status(400).json({ message: 'Course code must be 3 uppercase letters followed by 3 numbers!' });
        }

        const allCourses = await readJSON('utils/course.json');

        // Check for duplicate course codes
        const duplicate = allCourses.some(course => course.code === code && course.id !== id);
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
        } else {
            return res.status(404).json({ message: 'Course not found!' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



module.exports = {
    readJSON, writeJSON,viewCourses, updateCourse
};