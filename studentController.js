const Student = require('./student');  

exports.saveStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.json({ inserted: true });
    } catch (error) {
        res.json({ inserted: false });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        await Student.updateOne(
            { fname: "Mary Jane" },
            { $set: { lname: "Parker" } }
        );
        res.json({ updated: true });
    } catch (error) {
        res.json({ updated: false });
    }
};

exports.removeUser = async (req, res) => {
    try {
        await Student.deleteOne({ stdnum: req.body.stdnum });
        res.json({ deleted: true });
    } catch (error) {
        res.json({ deleted: false });
    }
};

exports.removeAllUsers = async (req, res) => {
    try {
        const result = await Student.deleteMany({});
        res.json({ deleted: result.acknowledged });
    } catch (error) {
        res.json({ deleted: false });
    }
};

exports.getUser = async (req, res) => {
    try {
        const students = await Student.find({ stdnum: req.query.stdnum });
        res.json(students);
    } catch (error) {
        res.json([]);
    }
};

exports.getMembers = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (error) {
        res.json([]);
    }
};