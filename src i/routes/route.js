const express = require('express');
const { loginUser, createUser } = require('../controllers/userControler');
const router = express.Router();
const {createStudent,getStudents,updateStudent,deleteStudent} = require('../controllers/studentController')
const {authenticate} = require("../controllers/auth")


router.post("/user",createUser)
router.post("/login",loginUser)

router.post("/student",authenticate,createStudent)
router.get("/students",authenticate,getStudents)
router.put("/student/:studentID",authenticate,updateStudent)
router.delete("/student/:studentID",authenticate,deleteStudent)


module.exports = router