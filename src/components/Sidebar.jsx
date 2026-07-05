import {BiNote, BiNotepad, BiPencil, BiSolidNote} from "react-icons/bi";
import SidebarItem from "./SidebarItem.jsx";

function Sidebar() {
    return (
        <div className="bg-primary w-64 flex flex-col p-4 gap-5">
            <div className="flex items-center text-white cursor-pointer">
                <BiNote className="text-4xl mr-2"/>
                <h1 className="text-2xl font-semibold">Catat Yuk!</h1>
            </div>
            <nav className="text-white">
                <ul className="flex flex-col gap-1">
                    <SidebarItem label="My Notes">
                        <BiNotepad className="text-2xl mr-2"/>
                    </SidebarItem>
                    <SidebarItem label="Add Note">
                        <BiPencil className="text-2xl mr-2"/>
                    </SidebarItem>
                    <SidebarItem label="Archived Notes">
                        <BiSolidNote className="text-2xl mr-2"/>
                    </SidebarItem>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;