import {NavLink} from "react-router-dom";

function SidebarItem({label, destination, children}) {
    return (
        <NavLink className="flex items-center p-3 hover:bg-overlay hover:rounded-xl hover:transition-all cursor-pointer"
                 to={destination}>
            {children}
            {label}
        </NavLink>
    );
}

export default SidebarItem;