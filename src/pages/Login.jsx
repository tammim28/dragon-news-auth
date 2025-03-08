import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
        userLogin(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch((error)=> {
            alert(error.code);
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className=" bg-base-100 w-full max-w-lg shrink-0  rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <div className="card-body">

                    <form onSubmit={handleSubmit} className="">
                        <label className="fieldset-label">Email</label> <br />
                        <input name="email" type="email" className="input w-full my-3" placeholder="Email" /> <br />
                        <label className="fieldset-label">Password</label> <br />
                        <input name="password" type="password" className="input w-full my-3" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral rounded-none w-full mt-4">Login</button>
                    </form>
                </div>
                <p className="text-center font-semibold ">Dont’t Have An Account ? <Link className="text-red-500" to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;