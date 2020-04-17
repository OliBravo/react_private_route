import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert'


const SignInForm = ({loginFailed, signIn}) => {

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

    const style = {
        width: "30%",
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid lightgray",
        padding: 30,
        paddingTop: 50,
        paddingBottom: 50
    } 

    const alertStyle = {
        display: loginFailed ? "block" : "none"
    }

    return (
        <Container style={style}>
            <Alert variant="danger" style={alertStyle}>
                Invalid username or password
            </Alert> 
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