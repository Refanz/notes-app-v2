import TextButton from "../components/TextButton.jsx";
import FormattedTextArea from "../components/FormattedTextArea.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {editNote, getNote} from "../utils/local-data.js";
import React from "react";
import showToast from "../utils/note-toast.js";

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

    return (
        <UpdateNotePage id={id} title={title} body={body} onSubmitHandler={onSubmitHandler}/>
    )
}

class UpdateNotePage extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            id: this.props.id,
            title: this.props.title,
            body: this.props.body,
        };

        this.onInputTextAreaHandler = this.onInputTextAreaHandler.bind(this);
        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onInputTextAreaHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            }
        })
    }

    onChangeTitleHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.onSubmitHandler({
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
        });
    }

    render() {
        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">Edit Note</h1>
                <div className="flex flex-col gap-5 bg-accent rounded-md p-4 shadow-md">
                    <form className="flex flex-col gap-10" onSubmit={this.onSubmitHandler}>
                        <input placeholder="Title" className="border p-2 border-border bg-surface"
                               value={this.state.title} onChange={this.onChangeTitleHandler}/>
                        <FormattedTextArea onInputHandler={this.onInputTextAreaHandler} body={this.state.body}/>
                        <TextButton label="Update Note" btnColor="bg-primary"/>
                    </form>
                </div>
            </section>
        )
    }
}

export default UpdateNotePageWrapper;