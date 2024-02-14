import React, { useState } from 'react'
import './Button.css'

const MyBtton = ({btnClassName,btnLabel,onbtnClick})=> {
    return (
        <button className={`btn ${btnClassName}`} onClick={onbtnClick}>{btnLabel}</button>
    )
}


const Button = () => {
  const [count,setCount] = useState(0);

  const decreaseHandler = ()=>{
    // document.body.style.backgroundColor = 'red'
    setCount(count-1)
  }

  return (
    <>
        <p>My Count {count}</p>
        {/* <button className='btn increase'>Increment</button>
        <button className='btn decrease'>Decrement</button> */}
        <MyBtton btnClassName="increase" 
        btnLabel="Increment" 
        onbtnClick={()=>setCount(count+1)} />
        <MyBtton btnClassName="decrease" 
        btnLabel="Decrement" 
        onbtnClick={decreaseHandler}/>
        {/* <button onClick={increaseHandler}/> */}
    </>
  )
}

export default Button


