const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    student:{
        type:Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        default:null
    },
    phone:{
        type:Number,
    },
    batch:{
        type:String
    },
    course:{
        type:String
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    },
    isApproved:{
        type:String,
        enum:['pending','approved','rejected'],
        default:'pending'
    }
})

module.exports=mongoose.model("applications",applicationSchema);