import IconButton from "./IconButton.jsx";
import {BiArchiveIn, BiPencil, BiTrash} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

function NoteCard({note, archiveNote}) {

    const navigate = useNavigate();

    return (
        <div id={note.id} className="flex flex-col gap-2 bg-accent p-4 rounded-md shadow-xl">
            <h1 className="text-2xl font-semibold">{note.title}</h1>
            <p className="line-clamp-3">{note.body}</p>
            <p>{note.createdAt}</p>
            <div className="flex justify-end gap-2 mt-5">
                <IconButton btnColor="bg-primary" onClick={archiveNote}>
                    <BiArchiveIn/>
                </IconButton>
                <IconButton btnColor="bg-sky-600" onClick={() => navigate(`/edit-note/${note.id}`)}>
                    <BiPencil/>
                </IconButton>
                <IconButton btnColor="bg-danger">
                    <BiTrash/>
                </IconButton>
            </div>
        </div>
    )
}

export default NoteCard;