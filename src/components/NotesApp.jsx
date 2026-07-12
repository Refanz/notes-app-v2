import Sidebar from "./Sidebar.jsx";
import {Route, Routes, useSearchParams} from "react-router-dom";
import NoteHeader from "./NoteHeader.jsx";
import React from "react";
import NotFound404 from "../pages/NotFound404.jsx";
import NoteHomePage from "../pages/NoteHomePage.jsx";
import AddNewNotePageWrapper from "../pages/AddNewNotePage.jsx";
import ArchivedNotesPage from "../pages/ArchivedNotesPage.jsx";
import DetailNotePage from "../pages/DetailNotePage.jsx";
import UpdateNotePageWrapper from "../pages/UpdateNotePage.jsx";

function NotesAppWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("q");

    function searchNotes(keyword) {
        setSearchParams({q: keyword});
    }

    return (<NotesApp keyword={keyword} searchNotes={searchNotes}/>)
}

class NotesApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            keyword: this.props.keyword || "",
        }

        this.handleSearchNotes = this.handleSearchNotes.bind(this);
    }

    handleSearchNotes(event) {
        this.setState(() => {
            return {
                keyword: event.target.value,
            }
        });

        this.props.searchNotes(this.state.keyword)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="flex flex-row-reverse">
                    <div className="flex flex-1 flex-col">
                        <header>
                            <NoteHeader searchQuery={this.state.keyword} handleSearchNotes={this.handleSearchNotes}/>
                        </header>
                        <main className="flex flex-col flex-1 p-4 gap-5 bg-surface">
                            <Routes>
                                <Route path="*" element={<NotFound404/>}/>
                                <Route index element={<NoteHomePage searchNotesKeyword={this.state.keyword}/>}/>
                                <Route path="add-note" element={<AddNewNotePageWrapper/>}/>
                                <Route path="archived-notes"
                                       element={<ArchivedNotesPage searchNotesKeyword={this.state.keyword}/>}/>
                                <Route path="notes">
                                    <Route path=":id" element={<DetailNotePage/>}/>
                                    <Route path=":id/edit" element={<UpdateNotePageWrapper/>}/>
                                </Route>
                            </Routes>
                        </main>
                    </div>
                    <Sidebar/>
                </div>
            </div>
        )
    }
}

export default NotesAppWrapper;
