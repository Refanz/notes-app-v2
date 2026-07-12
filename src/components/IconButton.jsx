import {J, validateProps} from "../utils/utils.js";

const iconButtonPropsSchema = J.object({
    btnColor: J.string().required(),
    onClick: J.func().required(),
    children: J.any().required(),
});

function IconButton(props) {

    const {btnColor, onClick, children} = validateProps(iconButtonPropsSchema, props, "IconButton");

    return (
        <button className={`p-2 cursor-pointer text-xl rounded-xl text-white ${btnColor}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default IconButton;