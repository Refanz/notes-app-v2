import {archiveNote, deleteNote, getActiveNotes, searchNotesByTitle} from "../utils/local-data.js";
import NoteCard from "../components/NoteCard.jsx";
import React from "react";
import EmptyNote from "../components/EmptyNote.jsx";
import {showDeletedNoteAlert, showDeleteNoteAlert} from "../utils/note-alert.js";

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
                {
                    currentNotes.length !== 0 ? <div className="grid grid-cols-3 gap-4">
                        {
                            currentNotes.map((note, index) => {
                                return (
                                    <NoteCard key={index} note={note}
                                              archiveNote={this.handleArchiveNote}
                                              deleteNote={this.handleDeleteNote}
                                    />
                                )
                            })
                        }
                    </div> : <EmptyNote/>
                }
            </section>
        )
    }
}

export default NoteHomePage;