import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import NotesAppWrapper from './components/NotesApp.jsx'
import "./styles/index.css"
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <NotesAppWrapper/>
        </BrowserRouter>
        <Toaster/>
    </>
)
