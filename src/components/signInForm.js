import React, { useState } from "react";

const SignInForm = ({signIn}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = e => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleSignIn = e => {
        e.preventDefault();
        console.log(username);
        const user = {
            username,
            password
        }
        signIn(user);
    }

    return (
        <form onSubmit={handleSignIn}>
            <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
            <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
            <button type="submit">Sing In</button>
        </form>
    )
}

export default SignInForm;