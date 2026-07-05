import {getArchivedNotes, unarchiveNote} from "../utils/local-data.js";
import ArchivedNoteCard from "../components/ArchivedNoteCard.jsx";
import React from "react";

class ArchivedNotesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes()
        };

        this.handleUnarchiveNote = this.handleUnarchiveNote.bind(this);
    }

    handleUnarchiveNote(id) {
        unarchiveNote(id);

        this.setState(() => {
            return {
                notes: getArchivedNotes()
            }
        })
    }

    render() {
        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">Archived Notes</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        this.state.notes.map((note, index) => {
                            return (
                                <ArchivedNoteCard note={note} key={index} unarchiveNote={() => this.handleUnarchiveNote(note.id)}/>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default ArchivedNotesPage;