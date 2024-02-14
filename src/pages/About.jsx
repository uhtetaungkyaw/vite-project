import React, { useEffect, useState } from 'react'
import axios from 'axios'
const About = () => {
const [datalist,setDataList] = useState([]);

  // GET
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((res)=>res.json())
  //   .then((data)=>console.log(data))
  //   .catch((err)=>console.log(err))
  // },[])

  //POST
  const paramStrings = {
    method: 'POST',
    header: 'Content-Type, application/json',
    body: JSON.stringify({
      body: "new data",
      id: 101,
      title: "new title",
      userId: "user1",
    })
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',paramStrings)
    .then((res)=>res.json())
    .then((data)=>console.log(`${data.id} has been created`))
  },[])
   
  useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>console.log(res.data))
  },[])

  useEffect(()=>{
    axios.post('https://jsonplaceholder.typicode.com/posts').then((res)=>console.log(res.data))
 },[])


  return (
    <div>About
      {
        datalist.map((item)=>
        <p key={item.id}>{item.title}</p>
        )
      }
    </div>
  )
}

export default About