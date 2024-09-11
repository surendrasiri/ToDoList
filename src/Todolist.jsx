import React, { useState } from 'react'
import'./Todo.css'

function Todolist() {

    const[todos, setTodos]=useState([]);
    const[inputValue, setInputValue]=useState('');


    function handleAddToDo(){
        if(inputValue.trim()!==''){
            setTodos([...todos, {id : Date.now(), text : inputValue}]);
            setInputValue('');
        }
    }


    function handleRemoveToDo(id){
      setTodos(todos.filter(todo => todo.id !== id))
    }


    function handleEditToDo(id, newText){
      setTodos(todos.map(todo => {
        if(todo.id === id){
          return{...todo, text: newText};
        }
        return todo;
      }))
    }
    

    function handleRemoveAllToDo(){
      setTodos([])
    }


  return (
    <>
    <div className='todo-list'>

      <h1>ToDo List</h1>

      <div className='add-todo'>

      <input type='text' placeholder='Enter a New ToDo'
        value={inputValue}
        onChange={(e)=>{setInputValue(e.target.value)}}
      />

      <button onClick={handleAddToDo}>Add Todo</button>

      </div>
      <ul>
        {todos.map( (todo) => (
            <li key={todo.id}>
            <span>{todo.text}</span>
            <div>
                <button onClick={()=>handleEditToDo(todo.id, prompt("Edit ToDo", todo.text))}>Edit</button>
                <button onClick={()=>handleRemoveToDo(todo.id)}>Delete</button>
                
            </div>
            </li>
           
           
        ))}
      </ul>

      {todos.length > 0 && (
        
        <div className='remove-all'>
        <button onClick={handleRemoveAllToDo}>Remove All</button>
      </div>
      )}

    </div>
    </>
    
  )
}

export default Todolist
