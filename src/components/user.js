import React from "react";

const User = ({username}) => {
    return username === null ? <h1>Unauthorised</h1>: (
        <div>
            {`User: ${username}`}
        </div>
    )
}

export default User;