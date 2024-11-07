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
        const name = req.body.name;
        const code = req.body.code;
        const description = req.body.description;
        const credits = req.body.credits;

        const allCourses = await readJSON('utils/course.json');
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