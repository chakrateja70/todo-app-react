import React, { useState } from 'react'

function App() {

  let [todoItem, setTodoItem] = useState('')
  let [todoList, setTodoList] = useState([])

  function addNewTodo() {
    if (todoItem !== '') {
      let newTodo = [...todoList, {
        id: todoList.length + 1,
        todo: todoItem
      }]  
      setTodoList(newTodo);
      setTodoItem('');
    } 
    
  }

  return (
    <div className='container mt-5 w-50'>
      <h1 className='text-center mb-5'>Todo List</h1>
      <div className="input-group">
        <input type="text" className='form-control' value={todoItem} onChange={(e) => {
          let task = e.target.value
          setTodoItem(task)
        }} />
        <button className='btn btn-primary' onClick={() => {
          addNewTodo()
        }}>Add</button>
      </div>

      <ul className='list-group mt-4'>
        {
          todoList.map((item) => {
            return (
              <li className='list-group-item d-flex justify-content-between'>
                <p>{item.todo}</p>
                <button className='btn' onClick={() => {
                  let newTodo = todoList.filter((list) => list.id !== item.id)
                  setTodoList(newTodo)
                }}>❌</button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default App