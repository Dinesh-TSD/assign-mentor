exports.home = (req, res) => {
  if (req.url === "/") {
    res.send(`
        <h2 style="background-color:#3f42fc; color:white; text-align:center; height:40px; padding-top:8px">Welcome to Guvi Zen Class Live Program</h2>
        <div style="display:flex; justify-content:center;padding:20px;"> 
        <div style=" padding:20px;"> 

        <p style="color:white;background-color:#3f42fc; padding:10px 40px; margin:10px 20px; text-align:center ">
          <a href="/api/v1/mentors" style="text-decoration:none;color:white;">All Mentors list</a>
        </p>
    
        <p style="color:white;background-color:#3f42fc; padding:10px 5px; margin:10px 20px; text-align:center ">
            <a href="/api/v1/students"  style="text-decoration:none;color:white;">All Students List</a>
        </p>
    
        <p style="color:white;background-color:#3f42fc; padding:10px 5px; margin:10px 20px; text-align:center ">
            <a href="/api/v1/students/withoutMentor"  style="text-decoration:none;color:white;">Students Without Mentors</a>
        </p>
    
        <p style="color:white;background-color:#3f42fc; padding:10px 5px; margin:10px 20px; text-align:center ">
            <a href="/api/v1/allstudents-Mentor/658321a1c802a2ef50ca111f"  style="text-decoration:none;color:white;">All Students Particular Mentors</a>
        </p>

        <p style="color:white;background-color:#3f42fc; padding:10px 5px; margin:10px 20px; text-align:center ">
            <a href="/api/v1/student_mentor/6583261fda45971a5c1da6b9"  style="text-decoration:none;color:white;">Mentor for Particular Student</a>
        </p>

        </div>
        </div>
        <h2 style="background-color:#3f42fc; color:white; text-align:center; height:40px; padding-top:8px;">Developed by Dinesh MERN Stack Developer</h2>
        `);
  } else { 
    res.status(404).send(`
        <h1>This is the wrong page</h1>
        `);
  }
};
