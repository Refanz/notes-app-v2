import {useNavigate} from "react-router-dom";
import {BiPlus} from "react-icons/bi";
import NoteSearchBar from "./NoteSearchBar.jsx";

function NoteHeader({searchQuery, handleSearchNotes}) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between p-4">
            <NoteSearchBar searchQuery={searchQuery} handleSearchNotes={handleSearchNotes}/>
            <button
                onClick={() => navigate("/add-note")}
                className="flex items-center  bg-primary px-5 text-white rounded-md min-w-28 cursor-pointer">
                Add Note
                <BiPlus className="text-xl ml-2"/>
            </button>
        </div>
    )
}

export default NoteHeader;