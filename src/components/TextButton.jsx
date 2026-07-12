function TextButton({label, btnColor, onClick}) {
    return (
        <button className={`bg-primary p-2 text-white rounded-md min-w-28 cursor-pointer ${btnColor}`} onClick={onClick}>
            {label}
        </button>
    );
}

export default TextButton;