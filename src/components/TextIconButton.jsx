function TextIconButton({onClick, isReverse = false, label, children}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center  bg-primary  px-5 text-white rounded-md min-w-28 cursor-pointer ${isReverse ? 'flex-row-reverse' : ''}`}>
            {label}
            {children}
        </button>
    )
}

export default TextIconButton;