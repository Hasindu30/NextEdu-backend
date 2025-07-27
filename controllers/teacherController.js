const Teacher = require("../models/Teacher");
const generateTeacherCode = require("../helpers/generateTeacherCode");

exports.createTeacher = async (req, res) => {
  try {
    const code = await generateTeacherCode();

    const newTeacher = new Teacher({
      code,
      ...req.body,
    });

    const saved = await newTeacher.save();
    res.status(201).json({ message: "Teacher created", data: saved });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({ isDeleted: false });
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const updated = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Teacher updated sucessfully", data: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ message: "Teacher deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
