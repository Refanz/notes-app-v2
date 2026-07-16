import TextButton from "../components/TextButton.jsx";
import {useState} from "react";
import {login} from "../utils/network-data.js";
import {Link} from "react-router-dom";
import {J, validateProps} from "../utils/utils.js";

const loginPagePropsSchema = J.object({
    onSuccessLogin: J.func().required(),
})

function LoginPage(props) {

    const {onSuccessLogin} = validateProps(loginPagePropsSchema, props, "LoginPage");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const {data} = await login({email, password});
        onSuccessLogin(data && data.accessToken);
    }

    return (
        <section className="mt-10">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                <TextButton label="Login" btnColor="bg-primary"/>
                <p className="text-center">Belum punya akun?
                    <Link to="/register" className="font-bold text-primary"> Daftar di sini</Link>
                </p>
            </form>
        </section>
    )
}

export default LoginPage;