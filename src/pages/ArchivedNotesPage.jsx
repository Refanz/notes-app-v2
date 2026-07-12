import {deleteNote, getArchivedNotes, searchNotesByTitle, unarchiveNote} from "../utils/local-data.js";
import React from "react";
import {showDeletedNoteAlert, showDeleteNoteAlert} from "../utils/note-alert.js";
import ArchiveNoteList from "../components/ArchiveNoteList.jsx";

class ArchivedNotesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes()
        };

        this.handleUnarchiveNote = this.handleUnarchiveNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
    }

    handleUnarchiveNote(id) {
        unarchiveNote(id);

        this.setState(() => {
            return {
                notes: getArchivedNotes()
            }
        });
    }

    async handleDeleteNote(id) {
        const isDelete = await showDeleteNoteAlert();

        if (isDelete) {
            deleteNote(id);
            showDeletedNoteAlert();

            this.setState(() => {
                return {
                    notes: getArchivedNotes(),
                }
            });
        }
    }

    render() {
        const currentNotes = this.props.searchNotesKeyword ? searchNotesByTitle(this.props.searchNotesKeyword, true)
            : this.state.notes;

        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">Archived Notes</h1>
                <ArchiveNoteList notes={currentNotes} onUnarchiveNote={this.handleUnarchiveNote}
                                 onDeleteNote={this.handleDeleteNote}/>
            </section>
        )
    }
}

export default ArchivedNotesPage;