const Student = require("../models/studentModel");
const Mentor = require("../models/mentorModel")

//Get all students
exports.getStudents = async (req, res, next) => {
  const students = await Student.find();
  res.status(201).json({
    success: true,
    message: "the route show All students",
    students,
  });
};

//2.Adding new student
exports.newStudent = async (req, res, next) => {
  const student = await Student.create(req.body);
  res.status(201).json({
    success: true,
    message: "student created successfully",
    student,
  });
};

//4.Write API to Assign or Change Mentor for particular Student
//a.Select One Student and Assign one Mentor
exports.mentorAssignStudent = async (req, res, next) => {
  try {
    const { mentorId } = req.body;
    const studentId = req.params.studentid;

    // Check if the mentor is already assigned to the student
    const student = await Student.findOne({ _id: studentId, mentor: mentorId });

    if (student) {
      return res
        .status(400)
        .json({
          error: `mentor '${mentorId}' is already assigned to student '${student.student_name}'`,
        });
    }

    // Update the student's mentor field
    await Student.findByIdAndUpdate(studentId, { mentor: mentorId });

    res
      .status(200)
      .json({
        success: true,
        message: "Mentor assigned to student successfully",
      });
  } catch (error) {
    console.error("Error assigning student to mentor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//3.
//b. A student who has a mentor should not be shown in List
exports.studentsWithoutMentor = async (req, res, next) => {
  try {
    // Find students without a mentor
    const studentsWithoutMentor = await Student.find({ mentor: null });

    res.status(200).json(studentsWithoutMentor);
  } catch (error) {
    console.error("Error getting students without mentor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//6.Write an API to show the previously assigned mentor for a particular student.
exports.mentorParticularStudent = async (req, res) => {
  try {
    const studentId = req.params.studentid;

    const student = await Student.findOne({ _id: studentId });

    if (!student) {
      console.log("Student not found");
    }

    const studentMentorId = student.mentor;
    const studentName = student.student_name;

    const studentMentor = await Mentor.findOne({_id: studentMentorId});

    const studentMentorName = studentMentor.mentor_name;

    res.status(200).json({
      success: true,
      studentName,
      studentMentorId,
      studentMentorName
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
