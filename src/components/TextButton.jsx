import {J, validateProps} from "../utils/utils.js";

const textButtonPropsSchema = J.object({
    label: J.string().required(),
    btnColor: J.string().required(),
    onClick: J.func().optional()
});

function TextButton(props) {
    const {label, btnColor, onClick} = validateProps(textButtonPropsSchema, props, "TextButton");

    return (
        <button className={`bg-primary p-2 text-white rounded-md min-w-28 cursor-pointer ${btnColor}`} onClick={onClick}>
            {label}
        </button>
    );
}

export default TextButton;