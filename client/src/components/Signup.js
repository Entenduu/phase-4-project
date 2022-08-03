import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Signup({ onLogin, setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
            password_confirmation: passwordConfirmation,
        }),
    }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate('/')
        } else {
            r.json().then((errorData) => setErrors(errorData.errors))
            alert(errors)
        }
        })
    }

    return (
        <div class='background-div'>

            <h1> sign up</h1>
        <form onSubmit={handleSubmit} class='login'>
    
            <label htmlFor="username"></label>
            <input
                placeholder="username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br></br>
            <label htmlFor="email"></label>
            <input
                placeholder="Email"
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br></br>
            <label htmlFor="password"></label>
            <input
                placeholder="password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br></br>
            <label htmlFor="password_confirmation"></label>
            <input
                placeholder="confirm password"
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            /><br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}
export default Signup;