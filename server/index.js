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



app.get("/api/getEmail/:searchname", async (req,res)=>{
    try{
        const {searchname}=req.params

        const user= await storer.findOne({username:searchname});

        if(!user){
            return res.status(404).json({error:'User not found'});
        }
        return res.json({ email: user.email });
    } 
    catch (err) {
      console.error('Error email:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

});


const PORT= process.env.PORT || 5005

app.listen(PORT ,()=>{
    console.log(`Server is working at ${PORT}`);
})