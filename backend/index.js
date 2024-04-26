import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    // console.log(req);

    return res.status(234).send('sdfg');
});

app.use('/books', booksRoute)

// app.post('/books', async (req, res) => {
//     try {
//         if (
//             !req.body.title |
//             !req.body.author |
//             !req.body.publishYear
//         ) {
//             return res.status(400).send({
//                 message: 'Send all required fields'
//             });
//         }

//         const newBook = {
//             title: req.body.title,
//             author: req.body.author,
//             publishYear: req.body.publishYear
//         }

//         const book = await Book.create(newBook);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message })
//     }
// });

// app.get('/books', async (req, res) => {
//     try {
//         const books = await Book.find({});
//         return res.status(200).json({
//             count: books.length,
//             data: books
//         });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message })
//     }
// });

// app.get('/books/:id', async (req, res) => {
//     try {
//         const bookId = req.params.id;
//         const book = await Book.findById(bookId);
//         return res.status(200).json(book);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message })
//     }
// });

// app.put('/books/:id', async (req, res) => {
//     try {
//         if (
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.publishYear
//         ) {
//             return res.status(400).send({
//                 message: 'Send all required fields!'
//             })
//         }

//         const { id } = req.params;
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(404).json({ message: 'Book not found.' });
//         }

//         const result = await Book.findByIdAndUpdate(id, req.body);

//         if (!result) {
//             return res.status(404).json({ message: 'Book not found.' })
//         }

//         return res.status(200).send({ message: 'Book updated successfully' })


//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message })
//     }
// });


// app.delete('/books/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(404).json({ message: 'Invalid book id.' });
//         }

//         if (!id) {
//             return res.status(404).send({ message: 'Invalid book id.' });
//         }

//         await Book.findByIdAndDelete(id);
//         res.status(200).send({ message: 'Successfully deleted.' });

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message });
//     }

// })

app.listen(PORT, () => console.log(`Listening on port - ${PORT}`));

mongoose
    .connect('mongodb://127.0.0.1:27017/bookStore')
    .then(() => {
        console.log('App connected to the database!');
    })
    .catch((err) => {
        console.log(err);
    });
