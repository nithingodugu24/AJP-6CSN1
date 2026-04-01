import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Task from "./Task";

export default function Dashboard() {
    const { getUser, loggedIn, setLoggedIn } = useContext(AuthContext);

    const user = loggedIn ? getUser() : {};

    return (
        <div>
            <h1>Hello {user?.username || "Guest"}</h1>  

            <Task/>

            <button onClick={()=>setLoggedIn(false)}>Logout</button>
        </div>
    );
}