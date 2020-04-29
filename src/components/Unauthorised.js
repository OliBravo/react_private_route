import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export const Unauthorised = () => {
    return (
        <Container >
            <p className="text-center mt-5">You must be logged in to access the content. <Link to="/login">Sign In</Link></p>
        </Container>
    )
}