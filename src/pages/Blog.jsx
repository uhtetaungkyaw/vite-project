import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userStore } from '../store/userStore'
const housesData = [
  {
    id: 1,
    img: '',
    date: '',
    title: '',
    location: '',
    category: '',
    description: '',
    price: ''
  },
  {
    id: 1,
    img: '',
    date: '',
    title: '',
    location: '',
    category: '',
    description: '',
    price: ''
  }
]

const newUserData = {
  username: 'aye aye',
  email: 'ayeaye@gmail.com'
}

const Blog = () => {
  const navigate = useNavigate();
  const setNewUserData = userStore.getState().setUserData;
  const {username,email} = userStore.getState().userData;

  const submitHandler = ()=>{
    setNewUserData(newUserData);
  }

  return (
    <div>Blog 
      <Link to={`/blog/1`} >See more</Link>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <button type='button' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Blog