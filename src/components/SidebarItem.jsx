function SidebarItem({label, children}) {
    return (
        <li className="flex items-center p-3 hover:bg-overlay hover:rounded-xl hover:transition-all cursor-pointer">
            {children}
            {label}
        </li>
    );
}

export default SidebarItem;