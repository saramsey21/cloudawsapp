import React from "react";

function Home() {
    return (
        <>
            <h1>Welcome In!</h1>
                  
            <li ref={localStorage}>First Name: {localStorage.firstName}</li>
            <li ref={localStorage}>Last Name: {localStorage.lastName}</li>
        </>
    );
}

export default Home;
