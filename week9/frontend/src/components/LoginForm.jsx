import { useState } from "react";

export default function LoginForm({setUserLoggedIn, setName}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLoginForm = async(e)=>{
        e.preventDefault();

        const res = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        
        });

        const data = await res.json();
        if(data.success){
            alert(data.message);
            setUsername('');
            setPassword('');
            setUserLoggedIn(true);
            setName(data.username);
        }else{
            alert(data.message);
        }
    }


    return (
        <div className="login-card card">
            <h2>Login</h2>
            <form onSubmit={handleLoginForm}>
                <input id="loginUsername" placeholder="Enter username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <input type="password" id="loginPassword" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}