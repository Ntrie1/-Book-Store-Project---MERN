import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        };

        setLoading(true);

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not okay.')
                }
                return res.json();
            })
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book created successfully!', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
            })
    }

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-gray-500">Title</label>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-gray-500"
                    />
                    </div>
                    <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-gray-500">Author</label>
                      <input type="text"
                        value={author}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-gray-500"
                    />
                    </div>
                    <div className="my-4">
                    <label htmlFor="" className="text-xl mr-4 text-gray-500">Publish Year</label>
                      <input type="text"
                        value={publishYear}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-gray-500"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default CreateBook;