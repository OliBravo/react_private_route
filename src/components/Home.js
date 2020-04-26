import React from "react";

const Home = ({user, signOut}) => {

    const handleLogOut = () => {
        signOut();
    }

    return (
        <div>
            <h1>{`Welcome ${user}!`}</h1>
            <button onClick={handleLogOut}>Sign Out</button>
        </div>
        
    )
}

export default Home;