import React from "react";

const User = ({username}) => {
    return username === null ? <h1>Unauthorised</h1>: (
        <div id="user-info">
            {`User: ${username}`}
        </div>
    )
}

export default User;