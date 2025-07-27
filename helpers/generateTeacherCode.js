const Teacher = require("../models/Teacher");

const generateTeacherCode = async () => {
  const count = await Teacher.countDocuments();
  const number = (count + 1).toString().padStart(2, "0");
  return `T${number}`;
};

module.exports = generateTeacherCode;
