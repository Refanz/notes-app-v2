import NoteHeader from "./NoteHeader.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import {J, validateProps} from "../utils/utils.js";
import {useEffect} from "react";

const dashboardNotePropsSchema = J.object({
    searchQuery: J.object(),
    handleSearchNotes: J.func().required(),
    authenticatedUser: J.object().required().allow(null),
    isLoading: J.bool(),
});

function DashboardNote(props) {
    const navigate = useNavigate();
    const {
        searchQuery,
        handleSearchNotes,
        authenticatedUser,
        isLoading,
    } = validateProps(dashboardNotePropsSchema, props, "DashboardNote");

    useEffect(() => {
        if (!isLoading && authenticatedUser === null) {
            navigate("/login");
        }
    }, [authenticatedUser, isLoading, navigate]);

    if (isLoading) {
        return null;
    }

    return (
        <div className="flex flex-row-reverse">
            <div className="flex flex-1 flex-col">
                <header>
                    <NoteHeader searchQuery={searchQuery.keyword}
                                handleSearchNotes={handleSearchNotes}/>
                </header>
                <main className="flex flex-col flex-1 p-4 gap-5 bg-surface">
                    <Outlet/>
                </main>
            </div>
            <Sidebar/>
        </div>
    )
}

export default DashboardNote;