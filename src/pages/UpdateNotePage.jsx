import TextButton from "../components/TextButton.jsx";
import FormattedTextArea from "../components/FormattedTextArea.jsx";

function UpdateNotePage({id}) {

    return (
        <section className="flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Edit Note</h1>
            <div className="flex flex-col gap-5 bg-accent rounded-md p-4 shadow-md">
                <h2 className="text-xl font-bold">New Note</h2>
                <form className="flex flex-col gap-10">
                    <input placeholder="Title" className="border p-2 border-border bg-surface"/>
                    <FormattedTextArea/>
                    <TextButton label="Add Note" btnColor="bg-primary"/>
                </form>
            </div>
        </section>
    )
}

export default UpdateNotePage;