import {archiveNote, getActiveNotes} from "../utils/local-data.js";
import NoteCard from "../components/NoteCard.jsx";
import React from "react";

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
        };

        this.handleArchiveNote = this.handleArchiveNote.bind(this);
    }

    handleArchiveNote(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            }
        });
    }

    render() {
        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">My Notes</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        this.state.notes.map((note, index) => {
                            return (
                                <NoteCard key={index} note={note} archiveNote={() => this.handleArchiveNote(note.id)} />
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default HomePage;