import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; 
import contactRoute from "./route/contact.route.js";
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';


const app = express();
app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(MongoDBURI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));


// defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use("/api", contactRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
