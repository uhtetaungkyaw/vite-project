import React, { useState } from 'react'

const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        console.log("Typed password "+e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(`Username: ${username} Password: ${password}`)
    }

  return (
    <div>
        <h2>Login Form</h2>
        <label>Username</label>
        <form onSubmit={submitHandler}>
            <input type="text" name="username" placeholder='username' value={username} 
            onChange={(e)=>{
                console.log("Typed value "+e.target.value)
                setUserName(e.target.value)
                }}/><br/>
            <label>Password</label>
            <input type="password" placeholder='password' value={password} onChange={passwordHandler}/><br/>
        <button type="submit">Submit</button>
        </form>
        <p>Login user: {username}</p>
    </div>
  )
}

export default Login