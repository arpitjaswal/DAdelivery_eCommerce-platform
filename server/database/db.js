import mongoose from "mongoose";


const db = async(username,password)=>{
    const URL= `mongodb+srv://${username}:${password}@cluster0.aftenfl.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {UseUnifiedTopology: true, useNewUrlParser: true} );
        console.log("Connected to the database successfully.")
    } catch (error) {
        console.log("Error while connecting",error.message);
    }
}

export default db;