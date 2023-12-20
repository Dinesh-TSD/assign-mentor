const mongoose = require("mongoose")

const mentorSchema = new mongoose.Schema({
    mentor_name:{
        type:String
        
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
    
})
  
let schema = mongoose.model('Mentor',mentorSchema);

module.exports  = schema; 