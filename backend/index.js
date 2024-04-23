import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";


const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    // console.log(req);

    return res.status(234).send('sdfg');
});

app.post('/books', async (req, res) => {
    try {
        if (
            !req.body.title |
            !req.body.author |
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all required fields'
            });
        }

    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear
    }    

    const book = await Book.create(newBook);
  
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});

app.listen(PORT, () => console.log(`Listening on port - ${PORT}`));

mongoose
    .connect('mongodb://127.0.0.1:27017/bookStore')
    .then(() => {
        console.log('App connected to the database!');
    })
    .catch((err) => {
        console.log(err);
    });
