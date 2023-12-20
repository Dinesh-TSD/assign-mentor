const express=require("express");
const { getMentors, newMentor, assignStudentMentor, allStudentsParticularMentor } = require("../controllers/mentorController");
const router = express.Router()

router.route('/mentors').get(getMentors)
router.route('/mentor/new').post(newMentor)
router.route('/mentor/:mentorid').put(assignStudentMentor)
router.route('/allstudents-Mentor/:mentorid').get(allStudentsParticularMentor)


module.exports = router;