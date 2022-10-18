const mongoose=require("mongoose")

//Creating Schema on type of data communicated to mongoDB
const UserSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        required:true
    },
})


//var a=10
//module.exportsa=a    => it can be used(called) anywhere in application using require()
module.exports=mongoose.model("user",UserSchema);


