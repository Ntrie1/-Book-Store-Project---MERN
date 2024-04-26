import './App.css'
import { Routes, Route } from 'react-router-dom';
import CreateBook from './pages/CreateBook.jsx';
import DetailsBook from './pages/DetailsBook.jsx';
import EditBook from './pages/EditBook.jsx';
import DeleteBook from './pages/DeleteBook';
import HomePage from './pages/Home.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<DetailsBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </>
  )
}

export default App
