import mongoose from "mongoose";

const connectToDb = async () => {
    await mongoose.connect("mongodb+srv://arunvasur:Arunvasumr@cluster0.9yy9om4.mongodb.net/brainly");
    console.log('mongoose is connected');
}

connectToDb();