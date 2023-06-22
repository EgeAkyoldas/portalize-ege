import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id:{type:String},
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    hashedPassword:{type:String,required:true,minLength:5},
    image:{type:String,},
    maps:{
        owned:{type:Array},
        liked:{type:Array},
    },
    created:{type: Date, default: Date.now},
    banned:{type:Boolean},
    gtime:{type:Number},
})

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;