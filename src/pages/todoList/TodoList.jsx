import React, { useState } from 'react'

const TodoList = () => {
    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const inputHandler = (e)=>{
        setInputText(e.target.value)
    }

    const addHandler = ()=>{
        console.log("Added value "+inputText)
        if(inputText !== ""){
            setTodoItems([...todoItems,inputText]);
            setInputText("")
        }
    }

    const editHandler = (clickedId)=>{
        console.log("Edit index "+ clickedId)
        const oldItem = todoItems.filter((item,index)=>index === clickedId) 
        const newText =window.prompt('Edit your text ',oldItem) 

        if(newText){
            console.log("New text "+newText)
            const updatedTodoItems = todoItems.map((item,index)=>
            index === clickedId ? newText : item) 
            console.log("Update todo items "+updatedTodoItems)
            setTodoItems(updatedTodoItems)
        }
    }

    const deleteHandler = (deleteId)=>{
        let updatedTodoList = todoItems.filter((item,index)=> index != deleteId)
        setTodoItems(updatedTodoList)
    }
    
  return (
    <div>
        <h2>TodoList</h2>
        <input type="text" value={inputText} onChange={inputHandler}/>
        <button type="button" onClick={addHandler}>Add</button>
        <div className='content'>
            {
                todoItems.map((item,index)=>
                <div key={index} className='todo'>
                    <p>{item}</p><button type='button' onClick={()=>editHandler(index)}>Edit</button>
                    <button type='button' onClick={()=>deleteHandler(index)}>Delete</button>
                </div> 
                )
            }
           
        </div>
    </div>
  )
}

export default TodoList