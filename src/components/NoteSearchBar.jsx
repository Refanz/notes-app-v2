import {J, validateProps} from "../utils/utils.js";

const noteSearchBarPropsSchema = J.object({
    searchQuery: J.string().allow(null, ""),
    handleSearchNotes: J.func().required(),
});

function NoteSearchBar(props) {
    const {searchQuery, handleSearchNotes} = validateProps(noteSearchBarPropsSchema, props, "NoteSearchBar");

    return (
        <input placeholder="Search.." className="border p-2 w-80 rounded-md border-border" type="text"
               value={searchQuery} onChange={handleSearchNotes} onBlur={handleSearchNotes}/>
    )
}

export default NoteSearchBar;