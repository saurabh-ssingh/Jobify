import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide name'],
        minLength:3,
        maxLength:20,
        trim:true,
    },
    email:{
        type:String,
        required:[true, 'Please provide email'],
        validate:{
            validator:validator.isEmail,
            message:'please provide a valid email'
        },
        unique: true,  //unique is not validator
    },
    password:{
        type:String,
        required:[true, 'Please provide password'],
        minLength:6,
    },
    lastName:{
        type:String,
        trim:true,
        maxLength:20,
        default: 'lastName',
        
    },
    location:{
        type:String,
        trim:true,
        maxLength:20,
        default: 'my city',
        
    }
})

UserSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    console.log(this.password);
})

//mongoose.model is used to create a collection of a particular database
//It takes two parameter
//first is collection name
//second is collection schema

export default mongoose.model('User',UserSchema);