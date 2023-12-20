const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    student_name:{
        type:String,
        
    },
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }
    
})
 
let schema = mongoose.model('Student',studentSchema);

module.exports  = schema;   