import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";


const app = express(); 


app.get('/', (req, res) => {
    // console.log(req);
    
    return res.status(234).send('sdfg');
}) 

app.listen(PORT, () => console.log(`Listening on port - ${PORT}`));

mongoose
.connect('mongodb://127.0.0.1:27017/bookStore')
.then(()=> {
    console.log('App connected to the database!');
})
.catch((err) => {
    console.log(err);
});
