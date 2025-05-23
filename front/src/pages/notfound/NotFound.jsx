import React from "react";
import { Link } from "react-router";

const NotFound = ()=>{
    return(
        <div>
            <h1>NOT FOUND</h1>
            <button><Link to={"/"} >GO TO HOME</Link></button>
        </div>
    )
}
export default NotFound