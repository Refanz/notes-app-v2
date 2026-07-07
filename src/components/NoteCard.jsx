import IconButton from "./IconButton.jsx";
import {BiArchiveIn, BiInfoCircle, BiPencil, BiTrash} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import parse from "html-react-parser";

function NoteCard({note, archiveNote, deleteNote}) {

    const navigate = useNavigate();

    return (
        <div id={note.id} className="flex flex-col gap-2 bg-accent p-4 rounded-md shadow-xl">
            <h1 className="text-2xl font-semibold">{note.title}</h1>
            <div className="line-clamp-3">{parse(note.body)}</div>
            <p>{note.createdAt}</p>
            <div className="flex justify-end gap-2 mt-10">
                <IconButton btnColor="bg-primary" onClick={() => archiveNote(note.id)}>
                    <BiArchiveIn/>
                </IconButton>
                <IconButton btnColor="bg-blue-500" onClick={() => navigate(`notes/${note.id}/edit`)}>
                    <BiPencil/>
                </IconButton>
                <IconButton btnColor="bg-danger" onClick={() => deleteNote(note.id)}>
                    <BiTrash/>
                </IconButton>
                <IconButton btnColor="bg-green-700" onClick={() => navigate(`notes/${note.id}`)}>
                    <BiInfoCircle/>
                </IconButton>
            </div>
        </div>
    )
}

export default NoteCard;