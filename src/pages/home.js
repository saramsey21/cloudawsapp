import React from "react";

function Home() {

    function returnData(e){
        e.preventDefault();
        const userData = {};
        userData.firstName = localStorage.getItem("firstName");
        Home.lastName = localStorage.getItem("lastName");
    }
    return (
        <>
            <h1>Welcome In!</h1>
            
      
            <li ref={Home}>First Name: {Home.firstName}</li>
            <li ref={Home}>Last Name: {Home.lastName}</li>
        </>
    );
}

export default Home;
