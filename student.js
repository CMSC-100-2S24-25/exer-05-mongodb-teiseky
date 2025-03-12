const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, {collection: 'studentData' });

module.exports = mongoose.model('Student', studentSchema);