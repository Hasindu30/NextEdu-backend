const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true }, // T01
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  workingSchool: { type: String },
  image: { type: String },
  nic: { type: String, required: true },
  joiningDate: { type: Date, required: true },
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Teacher", teacherSchema);
