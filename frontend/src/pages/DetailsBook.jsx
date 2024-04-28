import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailsBook = () =>{
    const [book, setBook] = useState([]);


    const params = useParams();
    const bookId = params.id;

    useEffect(() => {
        
        fetch(`http://localhost:5000/books/${bookId}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
    }, []);

    console.log(book);


    return (
        <div>DetailsBook</div>
    )
}

export default DetailsBook;