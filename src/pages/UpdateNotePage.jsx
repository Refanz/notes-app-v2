import TextButton from "../components/TextButton.jsx";
import FormattedTextArea from "../components/FormattedTextArea.jsx";
import {useParams} from "react-router-dom";
import {getNote} from "../utils/local-data.js";
import React from "react";

function UpdateNotePageWrapper() {

    const {id} = useParams();
    const {title, body} = getNote(id);

    return (
        <UpdateNotePage id={id} title={title} body={body}/>
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

    render() {
        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">Edit Note</h1>
                <div className="flex flex-col gap-5 bg-accent rounded-md p-4 shadow-md">
                    <form className="flex flex-col gap-10">
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