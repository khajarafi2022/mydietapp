import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    //how to maintain state
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const[mobilenumber,setMobilenumber] = useState('');
               const navigate  = useNavigate();
    //business logic
     const registerUser = (e) => {
        //how to connect service
        axios.post("http://localhost:4000/signup/rest/registerUser",{
          username:username,
          password:password,
          email:email,
          mobilenumber:mobilenumber
        }).then(()=>{
           navigate("/login");
        }).catch(err=>console.log(err));
        e.preventDefault();
     }
    return (
        <div>
            <center>
                <h2>Create new Account!!!</h2>
                <form onSubmit={registerUser} method='post'>
                    <label>Enter UserName:</label>
                    <input type='text' 
                    name='username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <label>Enter Password:</label>
                    <input type='password' 
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <label>Enter Email:</label>
                    <input type='email' 
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <label>Enter mobilenumber:</label>
                    <input type='number' 
                    name='mobilenumber'
                    value={mobilenumber}
                    onChange={(e)=>setMobilenumber(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <input type='submit' value='Register'/>
                </form>
            </center>
        </div>
    );
};

export default Signup;