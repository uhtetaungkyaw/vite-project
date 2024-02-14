import React from 'react'
import { userStore } from '../store/userStore';

const Home = () => {
  const {username,email} = userStore.getState().userData;
  return (
    <div>
      Home
    <p>User: {username}</p>  
    <p>Email: {email}</p>
    </div>
  )
}

export default Home