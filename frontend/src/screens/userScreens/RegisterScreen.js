import React, {useState} from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto sm:px-3 md:px-0 mt-6 md:mt-12"
        >
            {/*form goes in here*/}
            <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-center text-2xl font-bold">Sign In</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-500 text-sm font-bold">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Please enter your Name" className=
                            "border-2 border-gray-300 p-2 w-full rounded-md outline-none" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-500 text-sm font-bold">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Please enter your Email" className=
                            "border-2 border-gray-300 p-2 w-full rounded-md outline-none" />
                </div>
                <div className="mb-4">
                    <label  htmlFor="password" className="block text-gray-500 text-sm font-bold">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Please enter your Password"
                        className="border-2 border-gray-300 p-2 w-full rounded-md outline-none" />
                </div>
                <div className="mb-4">
                    <label  htmlFor="confirmPassword" className="block text-gray-500 text-sm font-bold">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Please enter Confirm Password"
                        className="border-2 border-gray-300 p-2 w-full rounded-md outline-none" />
                </div>
                <button className="bg-blue-800 p-2 px-4 rounded-xl text-slate-100 hover:bg-slate-400 hover:text-slate-950" type="submit">
                    Register
                </button>
                <div className="py-2 text-lg font-bold text-gray-400 cursor-pointer">
                    <p>Already Have An Account<Link to="/signin" className="text-blue-600 ml-2 hover:underline">Login</Link></p>
                </div>
            </form>
        </motion.div>
    );
};

export default RegisterScreen;