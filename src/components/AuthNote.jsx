import {BiNotepad} from "react-icons/bi";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function AuthNote({authenticatedUser, isLoading}) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && authenticatedUser !== null) {
            navigate("/")
        }
    }, [authenticatedUser, isLoading, navigate]);

    if (isLoading) {
        return null;
    }


    return (
        <div className="min-h-screen justify-center flex flex-col items-center bg-surface">
            <div className="bg-accent p-10 rounded-lg shadow-lg">
                <header className="flex flex-col justify-center gap-5 items-center">
                    <h1 className="text-2xl font-bold">Welcome, CatatYuk!</h1>
                    <BiNotepad className="text-5xl font-bold"/>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}

export default AuthNote;