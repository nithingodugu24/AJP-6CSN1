import { useState, createContext, useEffect } from "react";
// import { decode as atob, encode as btoa } from 'base-64';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [loggedIn, setLoggedIn] = useState(() => {
        return localStorage.getItem("loggedIn") === "true";
    });

    const [token, setToken] = useState(()=>{
        return localStorage.getItem("token") || "";
    });
    
    useEffect(()=>{
        if(token){
            localStorage.setItem("token", token);
        }
    }, [token])

    useEffect(()=>{
        if(loggedIn){
            localStorage.setItem("loggedIn", loggedIn == true ? "true": "false");
        }
    }, [loggedIn])

    const login = (token) => {
        setToken(token);
        setLoggedIn(true);
    }

    const logout = () => {
        setLoggedIn(false);
        token = "";
    }
    const getUser = ()=>{
        if(!token){
            return {};
        }
        const payload = token.split(".")[1];
        
        return JSON.parse(atob(payload));
    }

    return (
        <AuthContext.Provider value={{login, logout, getUser, loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );

}
