const Mentor = require("../models/mentorModel")
const Student = require("../models/studentModel")

//Get all mentors
exports.getMentors = async (req, res, next) => {
  const mentors = await Mentor.find();
  res.status(201).json({
    success: true,
    message: "the route show All Mentors",
    mentors
  })
}

//1.Adding new mentor
exports.newMentor = async (req, res, next) => {
  const mentor = await Mentor.create(req.body);
  res.status(201).json({
    success: true,
    message: "mentor created successfully",
    mentor
  })
}

//3.Write API to Assign a student to Mentor
//a.Select one mentor and Add multiple Student 
exports.assignStudentMentor = async (req, res, next) => {

  try {
    const { studentId } = req.body;
    const mentorId = req.params.mentorid;

    // Check if the student is already assigned to the mentor
    const mentor = await Mentor.findOne({ _id: mentorId, students: studentId });

    if (mentor) {
      return res.status(400).json({ error: `Student '${studentId}' is already assigned to Mentor '${mentor.mentor_name}'` });
    }

    // Update the student's mentor field
    await Student.findByIdAndUpdate(studentId, { mentor: mentorId });

    // Update the mentor's students array
    await Mentor.findByIdAndUpdate(mentorId, { $push: { students: studentId } });

    res.status(200).json({ success: true, message: 'Student assigned to mentor successfully' });
  } catch (error) {
    console.error('Error assigning student to mentor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//5.Write API to show all students for a particular mentor
exports.allStudentsParticularMentor = async (req,res) =>{
    
  const mentorId = req.params.mentorid;

  const mentor = await Mentor.findOne({_id: mentorId}).populate('students')

  if(!mentor){
    console.log('mentor not found');
  }

  const students = mentor.students;
  const mentorName= mentor.mentor_name;

  res.status(200).json({
    success: true,
    message: "All Students Particular Mentor",
    mentorName,
    students
  })
}
