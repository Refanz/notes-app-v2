import TextButton from "../components/TextButton.jsx";
import FormattedTextArea from "../components/FormattedTextArea.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {editNote, getNote} from "../utils/local-data.js";
import React from "react";
import showToast from "../utils/note-toast.js";
import {J, validateProps} from "../utils/utils.js";
import parse from "html-react-parser";

function UpdateNotePageWrapper() {

    const navigate = useNavigate();

    const {id} = useParams();
    const {title, body} = getNote(id);

    function onSubmitHandler(updatedNote) {
        editNote(updatedNote);
        showToast({
            message: "Update note successfully",
            type: "success",
        });
        navigate("/");
    }

    const note = {
        id: id,
        title: title,
        body: body,
    };

    return (
        <UpdateNotePage note={note} onSubmitHandler={onSubmitHandler}/>
    )
}

const updateNotePagePropsSchema = J.object({
    note: J.object({
        id: J.string().required(),
        title: J.string().required(),
        body: J.string().required(),
    }),
    onSubmitHandler: J.func().required(),
});

class UpdateNotePage extends React.Component {

    constructor(props) {
        super(props);

        const validatedProps = validateProps(updateNotePagePropsSchema, props, "UpdateNotePage");

        this.state = {
            validatedProps,
        };

        this.onInputTextAreaHandler = this.onInputTextAreaHandler.bind(this);
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onInputTextAreaHandler(event) {
        this.setState((prevState) => {
            return {
                validatedProps: {
                    ...prevState.validatedProps,
                    note: {
                        ...prevState.validatedProps.note,
                        body: event.target.innerHTML,
                    }
                }
            };
        });
    }

    onChangeTitleHandler(event) {
        this.setState((prevState) => {
            return {
                validatedProps: {
                    ...prevState.validatedProps,
                    note: {
                        ...prevState.validatedProps.note,
                        title: event.target.value,
                    }
                }
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        const {note, onSubmitHandler} = this.state.validatedProps;

        onSubmitHandler({
            id: note.id,
            title: note.title,
            body: parse(note.body),
        });
    }

    render() {

        const {title, body} = this.state.validatedProps.note;

        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">Edit Note</h1>
                <div className="flex flex-col gap-5 bg-accent rounded-md p-4 shadow-md">
                    <form className="flex flex-col gap-10" onSubmit={this.onSubmitHandler}>
                        <input placeholder="Title" className="border p-2 border-border bg-surface"
                               value={title} onChange={this.onChangeTitleHandler}/>
                        <FormattedTextArea onInputHandler={this.onInputTextAreaHandler}
                                           body={body}/>
                        <TextButton label="Update Note" btnColor="bg-primary"/>
                    </form>
                </div>
            </section>
        )
    }
}

export default UpdateNotePageWrapper;