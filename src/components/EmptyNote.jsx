import {J, validateProps} from "../utils/utils.js";

const emptyNotePropsSchema = J.object({
    message: J.string().required(),
})

function EmptyNote(props) {

    const {message} = validateProps(emptyNotePropsSchema, props, "EmptyNote");

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-32">
                <img src="/no-data.svg" alt="Empty Notes" className="object-contain"/>
            </div>
            <p className="font-bold text-xl">{message}</p>
        </div>
    )
}

export default EmptyNote;