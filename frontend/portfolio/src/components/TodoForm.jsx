import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault()
        
        addTodo({todo, completed:false})
        setTodo("")
    }

  return (
    <div>
      <form onSubmit={add}>
            <input type="text" 
                placeholder='Add Todo....'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button>Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
