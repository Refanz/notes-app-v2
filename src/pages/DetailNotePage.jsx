import {useParams} from "react-router-dom";
import {getNote} from "../utils/local-data.js";
import {parseDate} from "../utils/utils.js";
import parse from "html-react-parser";

function DetailNotePage() {
    const {id} = useParams();
    const {title, body, createdAt} = getNote(id)

    return (
        <section className="flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Detail Note</h1>
            <div className="flex flex-col gap-5 bg-accent rounded-md p-4 shadow-md">
                <div className="m-auto">
                    <img src="https://picsum.photos/300/300" alt="random image" className="object-fill rounded-xl"/>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    {
                        parse(body)
                    }
                    <p className="self-end">{parseDate(createdAt)}</p>
                </div>
            </div>
        </section>
    )
}

export default DetailNotePage;