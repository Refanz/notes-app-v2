function TextButton({label, btnColor, onClick}) {
    return (
        <button className={`p-2 cursor-pointer text-xl rounded-md text-white ${btnColor}`} onClick={onClick}>
            {label}
        </button>
    );
}

export default TextButton;