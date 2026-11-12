import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://hansaniwarawita_db_user:tZD2JzTBWaUNdFYp@cluster0.v6yhwu0.mongodb.net/Medicare")
    .then(() => {
        console.log("DB Connected");
    })
}