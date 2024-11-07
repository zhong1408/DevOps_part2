class Course {
    constructor(name, code, description, credits) {
        this.name = name;
        this.code = code;
        this.description = description;
        this.credits = credits;

        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        this.id = timestamp + "" + random.toString().padStart(3, '0');
    }
}

module.exports = { Course };