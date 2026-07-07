import {deleteNote, getActiveNotes, getArchivedNotes, unarchiveNote} from "../utils/local-data.js";
import ArchivedNoteCard from "../components/ArchivedNoteCard.jsx";
import React from "react";
import EmptyNote from "../components/EmptyNote.jsx";
import {showDeletedNoteAlert, showDeleteNoteAlert} from "../utils/note-alert.js";

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
        })
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
            })
        }
    }

    render() {
        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">Archived Notes</h1>
                {
                    this.state.notes.length !== 0 ? <div className="grid grid-cols-3 gap-4">
                        {
                            this.state.notes.map((note, index) => {
                                return (
                                    <ArchivedNoteCard note={note} key={index}
                                                      unarchiveNote={() => this.handleUnarchiveNote(note.id)}
                                                      handleDeleteNote={this.handleDeleteNote}
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

export default ArchivedNotesPage;