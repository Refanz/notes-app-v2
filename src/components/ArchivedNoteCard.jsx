import IconButton from "./IconButton.jsx";
import {BiArchiveOut, BiInfoCircle, BiPencil, BiTrash} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

function NoteCard({note, unarchiveNote, handleDeleteNote}) {

    const navigate = useNavigate();

    return (
        <div id={note.id} className="flex flex-col gap-2 bg-accent p-4 rounded-md shadow-xl">
            <h1 className="text-2xl font-semibold">{note.title}</h1>
            <p className="line-clamp-3">{note.body}</p>
            <p>{note.createdAt}</p>
            <div className="flex justify-end gap-2 mt-5">
                <IconButton btnColor="bg-primary" onClick={unarchiveNote}>
                    <BiArchiveOut/>
                </IconButton>
                <IconButton btnColor="bg-sky-600" onClick={() => navigate(`/notes/${note.id}/edit`)}>
                    <BiPencil/>
                </IconButton>
                <IconButton btnColor="bg-danger" onClick={() => handleDeleteNote(note.id)}>
                    <BiTrash/>
                </IconButton>
                <IconButton btnColor="bg-green-700" onClick={() => navigate(`/notes/${note.id}`)}>
                    <BiInfoCircle/>
                </IconButton>
            </div>
        </div>
    )
}

export default NoteCard;