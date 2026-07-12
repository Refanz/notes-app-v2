import ArchivedNoteCard from "./ArchivedNoteCard.jsx";
import EmptyNote from "./EmptyNote.jsx";
import {J, validateProps} from "../utils/utils.js";

const archiveNoteListPropsSchema = J.object({
    notes: J.array(),
    onUnarchiveNote: J.func().required(),
    onDeleteNote: J.func().required(),
});

function ArchiveNoteList(props) {
    const {notes, onUnarchiveNote, onDeleteNote} = validateProps(archiveNoteListPropsSchema, props, "ArchiveNoteList");

    return (
        <>
            {
                notes.length !== 0 ? <div className="grid grid-cols-3 gap-4">
                    {
                        notes.map((note, index) => {
                            return (
                                <ArchivedNoteCard note={note} key={index}
                                                  unarchiveNote={() => onUnarchiveNote(note.id)}
                                                  handleDeleteNote={onDeleteNote}
                                />
                            )
                        })
                    }
                </div> : <EmptyNote message="Archived Notes is empty!"/>
            }
        </>
    )
}

export default ArchiveNoteList;