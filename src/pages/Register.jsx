

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length < 5){
            setError({... error, name: "must be 5 character long"});
            return;
        }
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log({ name, email, photo, password });
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <div className="card-body">
                    {/* Use a <form> instead of <fieldset> */}
                    <form onSubmit={handleSubmit} className="form">
                        <label className="fieldset-label">Name</label> <br />
                        <input type="text" name="name" className="input w-full my-3" placeholder="Your Name" />
                        {
                            error.name && (<label className="label text-xs text-red-500">{error.name}</label>)
                        }

                        <label className="fieldset-label">Photo URL</label> <br />
                        <input type="text" name="photo" className="input w-full my-3" placeholder="photo-url" />

                        <label className="fieldset-label">Email</label> <br />
                        <input type="email" name="email" className="input w-full my-3" placeholder="Email" /> <br />

                        <label className="fieldset-label">Password</label> <br />
                        <input type="password" name="password" className="input w-full my-3" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* Ensure the button is of type "submit" */}
                        <button type="submit" className="btn btn-neutral rounded-none w-full mt-4">Register</button>
                    </form>
                </div>
                <p className="text-center font-semibold">
                    Already Have An Account? <Link className="text-red-500" to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
