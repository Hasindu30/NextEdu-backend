const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

router.post("/create", teacherController.createTeacher);
router.get("/list", teacherController.getAllTeachers);
router.put("/:id", teacherController.updateTeacher);
router.delete("/:id", teacherController.deleteTeacher);

module.exports = router;
