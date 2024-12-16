import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://arunvasur:WGgxms36fZSYRbzt@cluster0.cqc6n.mongodb.net/brain-app")
.then(() => {
  console.log('mongoose is connected!')
})

const userSchema = new Schema({
  username: {type: String, unique: true, require: true},
  password: {type: String, require: true}
})

export const userModel = model("User", userSchema)