import TextButton from "../components/TextButton.jsx";
import FormattedTextArea from "../components/FormattedTextArea.jsx";
import React from "react";
import {addNote} from "../utils/local-data.js";
import {useNavigate} from "react-router-dom";

function AddNewNotePageWrapper() {

    const navigate = useNavigate();

    function handleSubmit({title, body}) {
        addNote({title, body})
        navigate("/")
    }

    return (
        <AddNewNotePage handleSubmit={handleSubmit}/>
    )
}

class AddNewNotePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onInputTextAreaHandler = this.onInputTextAreaHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeTitleHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onInputTextAreaHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML
            }
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.handleSubmit({
            title: this.state.title,
            body: this.state.body,
        });
    }


    render() {
        return (
            <section className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold">Add New Note</h1>
                <div className="flex flex-col gap-5 bg-accent rounded-md p-4 shadow-md">
                    <h2 className="text-xl font-bold">New Note</h2>
                    <form className="flex flex-col gap-10" onSubmit={this.onSubmitHandler}>
                        <input placeholder="Title" className="border p-2 border-border bg-surface"
                               onChange={this.onChangeTitleHandler} value={this.state.title}/>
                        <FormattedTextArea body={this.state.body} onInputHandler={this.onInputTextAreaHandler}/>
                        <TextButton label="Add Note" btnColor="bg-primary"/>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddNewNotePageWrapper;