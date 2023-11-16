import React from "react";
import Navbar from "../navbar/navbar";
import "./login.css";
//Maqueta 
function Login() {
  return (
    <>
    
        <Navbar />
        <div>
        
        <div className="login">
            <h1>Login</h1>
            <form method="post">
            <input type="text" name="u" placeholder="Username" required="required" />
            <input type="password" name="p" placeholder="Password" required="required" />
            <button type="submit" className="btn btn-primary btn-block btn-large">
                Let me in.
            </button>
            </form>
        </div>
        </div>
    </>
    );
}

export default Login;