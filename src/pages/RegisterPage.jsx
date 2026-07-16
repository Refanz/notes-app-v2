import {useState} from "react";
import TextButton from "../components/TextButton.jsx";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../utils/network-data.js";
import showToast from "../utils/note-toast.js";

function RegisterPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const isRegistered = await register({ name, email, password });

        if (!isRegistered.error) {
            showToast({
                "message": "Registrasi Sukses",
                "type": "success",
            });

            navigate("/login");
        }
    }

    return (
        <section className="mt-10">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-bold">Name</label>
                    <input type="text" className="p-2 min-w-96 border border-border rounded-lg" autoComplete="off"
                           value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-bold">Email</label>
                    <input type="email" className="p-2 min-w-96 border border-border rounded-lg" autoComplete="off"
                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-lg font-bold">Password</label>
                    <input type="password" className="p-2 min-w-96 border border-border rounded-lg" autoComplete="off"
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <TextButton label="Register" btnColor="bg-primary"/>
                <p className="text-center">Sudah punya akun?
                    <Link to="/login" className="font-bold text-primary"> Login</Link>
                </p>
            </form>
        </section>
    )
}

export default RegisterPage;