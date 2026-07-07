import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import NotesApp from './components/NotesApp.jsx'
import "./styles/index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddNewNotePageWrapper from "./pages/AddNewNotePage.jsx";
import ArchivedNotesPage from "./pages/ArchivedNotesPage.jsx";
import UpdateNotePageWrapper from "./pages/UpdateNotePage.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import DetailNotePage from "./pages/DetailNotePage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound404/>}/>
                <Route element={<NotesApp/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="add-note" element={<AddNewNotePageWrapper/>}/>
                    <Route path="archived-notes" element={<ArchivedNotesPage/>}/>
                    <Route path="notes">
                        <Route path=":id" element={<DetailNotePage/>}/>
                        <Route path=":id/edit" element={<UpdateNotePageWrapper/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
