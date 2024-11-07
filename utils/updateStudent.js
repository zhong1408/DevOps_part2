const { Student } = require('../models/Student');
const fs = require('fs').promises;

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8')
        return JSON.parse(data);
    } catch (err) {
        console.error(err); throw err;
    }
}

async function writeJson(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);

        await fs.writeFile(filename, JSON.stringify(allObjects), 'utf8');
        return allObjects;
    } catch (err) {
        console.error(err); throw err;
    }
}
async function updatestudent(req, res) {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const age = req.body.age;
        const course = req.body.course;
        const email = req.body.email;
        const allResources = await readJSON('utils/students.json');
        var modified = false;
        for (var i = 0; i < allResources.length; i++) {
            var curcurrResource = allResources[i];
            if (curcurrResource.id == id) {
                allResources[i].name = name;
                allResources[i].age = age;
                allResources[i].course = course;
                allResources[i].email = email;
                modified = true;
            }
        }
        if (modified) {
            await fs.writeFile('utils/students.json', JSON.stringify(allResources), 'utf8');
            return res.status(201).json({ message: 'Student updated successfully!' });
        } else {
            return res.status(500).json({ message: 'Error occurred, unable to update!' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    readJSON, writeJson, updatestudent
}