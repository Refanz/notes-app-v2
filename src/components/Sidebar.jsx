import {BiNote, BiNotepad, BiPencil, BiSolidArrowToLeft, BiSolidNote} from "react-icons/bi";
import SidebarItemIcon from "./SidebarItemIcon.jsx";
import TextIconButton from "./TextIconButton.jsx";

function Sidebar() {
    return (
        <div className="bg-primary min-w-64 min-h-screen flex flex-col p-4 gap-5">
            <div className="flex items-center text-white cursor-pointer">
                <BiNote className="text-4xl mr-2"/>
                <h1 className="text-2xl font-semibold">Catat Yuk!</h1>
            </div>
            <nav className="text-white">
                <ul className="flex flex-col gap-1">
                    <SidebarItemIcon label="My Notes" destination="/">
                        <BiNotepad className="text-2xl mr-2"/>
                    </SidebarItemIcon>
                    <SidebarItemIcon label="Add Note" destination="/add-note">
                        <BiPencil className="text-2xl mr-2"/>
                    </SidebarItemIcon>
                    <SidebarItemIcon label="Archived Notes" destination="/archived-notes">
                        <BiSolidNote className="text-2xl mr-2"/>
                    </SidebarItemIcon>
                    <li className="p-2 mt-20 border-t">
                        <TextIconButton onClick={() => {}} label="Logout" isReverse={true}>
                            <BiSolidArrowToLeft className="text-2xl mr-2"/>
                        </TextIconButton>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;