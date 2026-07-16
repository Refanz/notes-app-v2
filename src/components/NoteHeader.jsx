import {useNavigate} from "react-router-dom";
import {BiPlus} from "react-icons/bi";
import NoteSearchBar from "./NoteSearchBar.jsx";
import {J, validateProps} from "../utils/utils.js";
import TextIconButton from "./TextIconButton.jsx";

const noteHeaderPropsSchema = J.object({
    searchQuery: J.string().allow(null, ""),
    handleSearchNotes: J.func(),
});

function NoteHeader(props) {
    const {searchQuery, handleSearchNotes} = validateProps(noteHeaderPropsSchema, props, "NoteHeader");

    const navigate = useNavigate();

    return (
        <div className="flex justify-between p-4">
            <NoteSearchBar searchQuery={searchQuery} handleSearchNotes={handleSearchNotes}/>
            <TextIconButton onClick={() => navigate("/add-note")} label="Add Note">
                <BiPlus className="text-xl ml-2"/>
            </TextIconButton>
        </div>
    )
}

export default NoteHeader;