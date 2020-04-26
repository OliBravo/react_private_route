import React from "react";
import { Link } from "react-router-dom";

export const Unauthorised = () => {
    return (
        <div>
            <p>You must be logged in to access the content.</p>
            <Link to="/login">Sign In</Link>
        </div>
    )
}