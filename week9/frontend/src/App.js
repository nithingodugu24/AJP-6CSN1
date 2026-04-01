import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import {useState} from "react";

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [name, setName] = useState('');
  // const [authType, setName] = useState('');



  return (
    <div className="App">
        <RegisterForm />
        {userLoggedIn ? <Dashboard name={name}/> : <LoginForm setUserLoggedIn={setUserLoggedIn} setName={setName}/>}
    </div>
  );
}

export default App;
