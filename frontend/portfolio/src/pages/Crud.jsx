import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import {TodoProvider} from '../contexts/TodoContext'
import TodoForm from "../components/TodoForm"
import TodoItem from '../components/TodoItem'


function Crud() {
  const[todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => { 
    setTodos((prev) => prev.filter((todo)=> todo.id  !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,
      completed: !prevTodo.completed } :prevTodo ))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
      if(todos && todos.length > 0){
        setTodos(todos)
      }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <div>
      <Container>
      <TodoProvider value ={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>      
          <h1>Manage Your Todos</h1>
          <div>
          <TodoForm/>
          </div>
          <div> 
            {todos.map((todo) => (
              <div key={todo.id}>
                  <TodoItem todo ={todo} />
              </div>  
            ))
            }
          </div>              
      </TodoProvider>
      </Container>
    </div>
  )
}

export default Crud
