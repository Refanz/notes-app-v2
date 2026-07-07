import {BiNote, BiNotepad, BiPencil, BiSolidNote} from "react-icons/bi";
import SidebarItem from "./SidebarItem.jsx";

function Sidebar() {
    return (
        <div className="bg-primary min-w-64 min-h-screen flex flex-col p-4 gap-5">
            <div className="flex items-center text-white cursor-pointer">
                <BiNote className="text-4xl mr-2"/>
                <h1 className="text-2xl font-semibold">Catat Yuk!</h1>
            </div>
            <nav className="text-white">
                <ul className="flex flex-col gap-1">
                    <SidebarItem label="My Notes" destination="/">
                        <BiNotepad className="text-2xl mr-2"/>
                    </SidebarItem>
                    <SidebarItem label="Add Note" destination="/add-note">
                        <BiPencil className="text-2xl mr-2"/>
                    </SidebarItem>
                    <SidebarItem label="Archived Notes" destination="/archived-notes">
                        <BiSolidNote className="text-2xl mr-2"/>
                    </SidebarItem>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;