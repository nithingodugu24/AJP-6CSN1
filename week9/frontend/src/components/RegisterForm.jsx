import { useState } from "react";

export default function RegisterForm(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleRegisterForm = async(e)=>{
        e.preventDefault();

        const res = await fetch("http://localhost:8000/register", {
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
        }else{
            alert(data.message);
        }
    }


    return (
        <div className="register-card card">
            <h2>Register</h2>
            <form onSubmit={handleRegisterForm}>
                <input id="regUsername" placeholder="Enter username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <input type="password" id="regPassword" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}