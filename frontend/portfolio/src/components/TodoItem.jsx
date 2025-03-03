import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const[todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = ()=>{
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  } 

  const toggleCompleted = ()=>{
    toggleComplete(todo.id)
  }




  return (
    <div className=''>
      <input type="checkbox"
        checked ={todo.completed}
        onChange={toggleCompleted}

       />
       <input type="text" 
          value={todoMsg}
          onChange={(e)=> setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
          />
       <button
        onClick={()=>{
          if(todo.completed) return;
          if(isTodoEditable){
            editTodo();
          }else setIsTodoEditable((prev)=> !prev)
        }}
       >
        {isTodoEditable?"📁" : "✏️"}
       </button>
       <button
        onClick={()=>deleteTodo(todo.id)}
       >
          ❌
       </button>
    </div>
  )
}

export default TodoItem
