function NoteSearchBar({searchQuery, handleSearchNotes}) {
    return (
        <input placeholder="Search.." className="border p-2 w-80 rounded-md border-border" type="text"
               value={searchQuery} onChange={handleSearchNotes} onBlur={handleSearchNotes}/>
    )
}

export default NoteSearchBar;