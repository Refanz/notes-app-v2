import Sidebar from "./Sidebar.jsx";
import {BiPlus} from "react-icons/bi";
import {Outlet, useNavigate} from "react-router-dom";

function NotesApp() {

    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="flex flex-row-reverse">
                <div className="flex flex-1 flex-col">
                    <header>
                        <div className="flex justify-between p-4">
                            <input placeholder="Search.." className="border p-2 w-80 rounded-md border-border"/>
                            <button
                                onClick={() => navigate("/add-note")}
                                className="flex items-center  bg-primary px-5 text-white rounded-md min-w-28 cursor-pointer">
                                Add Note
                                <BiPlus className="text-xl ml-2"/>
                            </button>
                        </div>
                    </header>
                    <main className="flex flex-col flex-1 p-4 gap-5 bg-surface">
                        <Outlet/>
                    </main>
                </div>
                <Sidebar/>
            </div>
        </div>
    )
}

export default NotesApp
