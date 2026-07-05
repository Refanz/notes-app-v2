import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddNewNotePage from "./pages/AddNewNotePage.jsx";
import ArchivedNotesPage from "./pages/ArchivedNotesPage.jsx";
import UpdateNotePage from "./pages/UpdateNotePage.jsx";
import NotFound404 from "./pages/NotFound404.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound404/>}/>
                <Route path="/" element={<App/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="add-note" element={<AddNewNotePage/>}/>
                    <Route path="archived-notes" element={<ArchivedNotesPage/>}/>
                    <Route path="edit-note:id" element={<UpdateNotePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
