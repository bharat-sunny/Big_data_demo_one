import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: {
        type : String,
        required : "First name is required"
    },
    lastName : {
        type : String,
        required : "Last name is required"
    },
    email : {
        type: String,
        required : "Email is required",
        unique: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    lastModifiedDate: {
        type: Date,
        default : Date.now
    }
}, {skipVersioning: true});

const model = mongoose.model('user', schema);

export default model;