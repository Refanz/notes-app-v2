function IconButton({label, btnColor, onClick, children}) {
    return (
        <button className={`p-2 cursor-pointer text-xl rounded-xl text-white ${btnColor}`} onClick={onClick}>
            {label}
            {children}
        </button>
    )
}

export default IconButton;