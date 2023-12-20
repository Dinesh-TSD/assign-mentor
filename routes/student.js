const express=require("express");
const { getStudents, newStudent, mentorAssignStudent, studentsWithoutMentor, mentorParticularStudent } = require("../controllers/studentController");
const router = express.Router()

router.route('/students').get(getStudents)
router.route('/student/new').post(newStudent)
router.route('/student/:studentid').put(mentorAssignStudent)
router.route('/students/withoutMentor').get(studentsWithoutMentor)
router.route('/student_mentor/:studentid').get(mentorParticularStudent)

module.exports = router;