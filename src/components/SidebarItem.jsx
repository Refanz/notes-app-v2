import {NavLink} from "react-router-dom";
import {J, validateProps} from "../utils/utils.js";

const sideBarItemPropsSchema = J.object({
    label: J.string().required(),
    destination: J.string().required(),
    children: J.any().required(),
})

function SidebarItem(props) {

    const {label, destination, children} = validateProps(sideBarItemPropsSchema, props, "SidebarItem");

    return (
        <NavLink className="flex items-center p-3 hover:bg-overlay hover:rounded-xl hover:transition-all cursor-pointer"
                 to={destination}>
            {children}
            {label}
        </NavLink>
    );
}

export default SidebarItem;