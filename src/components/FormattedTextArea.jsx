import {J, validateProps} from "../utils/utils.js";
import parse from "html-react-parser";

const formattedTextAreaPropsSchema = J.object({
    onInputHandler: J.func().required(),
    body: J.any().required(),
});

function FormattedTextArea(props) {
    const {onInputHandler, body} = validateProps(formattedTextAreaPropsSchema, props, "FormattedTextArea");

    return (
        <div data-placeholder="Description.." contentEditable
             className="border border-border min-h-56 p-2 bg-surface" onBlur={onInputHandler} suppressContentEditableWarning={true}>
            {parse(body)}
        </div>
    )
}

export default FormattedTextArea;