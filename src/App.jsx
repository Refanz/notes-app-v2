import Sidebar from "./components/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import {BiPlus} from "react-icons/bi";

function App() {

    return (
        <div className="container-fluid">
            <header>

            </header>
            <div className="flex min-h-screen">
                <Sidebar/>
                <main className="flex flex-col flex-1 p-4 gap-5 bg-surface">
                    <div className="flex justify-between">
                        <input placeholder="Search.." className="border p-2 w-80 rounded-md border-border"/>
                        <button className="flex items-center  bg-primary px-5 text-white rounded-md min-w-28 cursor-pointer">
                            Add Note
                            <BiPlus className="text-xl ml-2"/>
                        </button>
                    </div>
                    <HomePage/>
                </main>
            </div>
        </div>
    )
}

export default App
