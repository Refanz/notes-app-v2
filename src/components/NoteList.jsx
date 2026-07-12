import EmptyNote from "./EmptyNote.jsx";
import NoteCard from "./NoteCard.jsx";
import {J, validateProps} from "../utils/utils.js";

const noteListPropsSchema = J.object({
    notes: J.array(),
    onArchiveNote: J.func().required(),
    onDeleteNote: J.func().required(),
});

function NoteList(props) {

    const {notes, onArchiveNote, onDeleteNote} = validateProps(noteListPropsSchema, props, "NoteList");

    return (
        <>
            {
                notes.length !== 0 ? <div className="grid grid-cols-3 gap-4">
                    {
                        notes.map((note, index) => {
                            return (
                                <NoteCard key={index} note={note}
                                          archiveNote={onArchiveNote}
                                          deleteNote={onDeleteNote}
                                />
                            )
                        })
                    }
                </div> : <EmptyNote message="Notes is empty!"/>
            }
        </>
    )
}

export default NoteList;