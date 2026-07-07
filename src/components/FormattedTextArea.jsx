function FormattedTextArea({onInputHandler, body}) {
    return (
        <div data-placeholder="Description.." contentEditable
             className="border border-border min-h-56 p-2 bg-surface" onBlur={onInputHandler}>
            {body}
        </div>
    )
}

export default FormattedTextArea;