import mongoose from "mongoose" 

const todoSchema = new mongoose.Schema({
content :{
  type : String,
  required : true,
},
complete : {
  type: Boolean,
  default : false
},
createdBy : {
  type : mongoose.Schema.Type.ObjectId,
  ref : "User"
},
subTodo : [
  {
    type : mongoose.Schema.Type.ObjectId,
    ref : "SubTodo"
  }
]

},{timeStamps : true})

export const Todo = mongoose.model("Todo",todoSchema)