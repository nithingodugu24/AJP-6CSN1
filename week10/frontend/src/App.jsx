import { useState, useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import RegisterForm from './components/Register'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const {loggedIn} = useContext(AuthContext);

  return (
    <>
    {loggedIn ? 
    <Dashboard/>
    : 
    <>
    <RegisterForm/>
    <LoginForm/>
    </>
    }

     {/* <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
    </BrowserRouter> */}
    </>
  );



}

export default App
