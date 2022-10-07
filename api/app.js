import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from "./routes/user-routes.js";

const app = express();

//  Connect to the mongo database
mongoose.connect("mongodb://localhost/users-db");

app.use(express.json());

app.use(express.urlencoded());

app.use(cors({
    exposedHeaders: ['ETag']
}));

//  Redirects to all user routes under routes/user-routes.js
app.use("/users",userRoutes)

export default app;