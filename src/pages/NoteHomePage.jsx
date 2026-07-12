import {archiveNote, deleteNote, getActiveNotes, searchNotesByTitle} from "../utils/local-data.js";
import React from "react";
import {showDeletedNoteAlert, showDeleteNoteAlert} from "../utils/note-alert.js";
import NoteList from "../components/NoteList.jsx";

class NoteHomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
        };

        this.handleArchiveNote = this.handleArchiveNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
    }

    handleArchiveNote(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes(),
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
                    notes: getActiveNotes(),
                }
            })
        }
    }

    render() {
        const currentNotes = this.props.searchNotesKeyword ? searchNotesByTitle(this.props.searchNotesKeyword) : this.state.notes;

        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">My Notes</h1>
                <NoteList notes={currentNotes} onArchiveNote={this.handleArchiveNote}
                          onDeleteNote={this.handleDeleteNote}/>
            </section>
        )
    }
}

export default NoteHomePage;