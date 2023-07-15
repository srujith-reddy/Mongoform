import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import storer from "./model/database.js";
import cors from "cors";
import bodyParser from "body-parser";


const app=express()

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post("/",(req,res)=>{
        const {username, email}=req.body;
        const formData={username,email};
        console.log('Received data:', { username, email });
        res.send("Data received successfully");


        const form = new storer(formData);
        storer.create(formData)
        .then(() => {
            console.log('Saved document to the collection');
        })
        .catch((err) => {
            console.error('Could not save document', err);
        });
})


const PORT= process.env.PORT || 5005

app.listen(PORT ,()=>{
    console.log(`Server is working at ${PORT}`);
})