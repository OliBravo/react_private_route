import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const SignInForm = ({signIn}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSignIn = e => {
        e.preventDefault();
        const user = {
            username,
            password
        }
        signIn(user);
    }

    const style = {
        width: "30%",
        minWidth: 200,
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid lightgray",
        padding: 30,
        paddingTop: 50,
        paddingBottom: 50
    } 

    return (
        <Container style={style}>
            <Form onSubmit={handleSignIn}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username" value={username} onChange={handleUsernameChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={handlePasswordChange} />
                </Form.Group>
                <Button type="submit">Sign In</Button>
            </Form>
        </Container>
    )
}

export default SignInForm;