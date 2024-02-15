import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [ShowPopup,setShowPopup]=useState(false);
    const[error,setError]=useState('');
    const navigate=useNavigate();
    const handleLogin=()=>{
        if(email==='admin@abc.com'&&password==='admin'){
            setShowPopup(true);
            setError('');
        }else{
            setError('Invalid cridential');
        }

    }
    const handleok=()=>{
        navigate('/employees')
    }
    return(
        <div className='login-container'>
        <h2>Login</h2>
        <div className='input-container'>
        <input type="text" placeholder='Email' value={email} />
        <input type="password" placeholder='Password' value={password}/>
        </div>
        <button>Submit</button>
       </div> 
    )
}