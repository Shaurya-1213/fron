'use client'
import React, { useState } from 'react'

const todo = () => {

  const [todoList, setTodoList] = useState([])

  const addTask = (e) => {

    if (e.code === 'Enter') {
      console.log(e.target.value);

      setTodoList([...todoList, { task: e.target.value, completed: false }]);
      e.target.value = '';
    }

  }

  const deleteTask = (index) => {
    console.log(index);
    const temp = todoList;
    temp.splice(index, 1);
    setTodoList([...temp]);
  }

  const finishTask = (index) => {
    const temp = todoList;
    temp[index].completed = !temp[index].completed;
    console.log(temp);
    setTodoList([...temp]);
  }

  return (
    <div className='container py-5'>
      <h2 className="text-center">Todo List</h2>
      <hr />

      <div className="card">
        <div className="card-header">
          <input onKeyDown={addTask} type="text" className='form-control border-primary border-2' />
        </div>
        <div className="card-body">
          {
            todoList.map((e, index) => {
              return <div key={index} className='d-flex justify-content-between align-items-center p-3'>
                <p>{e.task}</p>
                {e.completed ?
                  <span className='badge bg-success'>Completed</span>
                  :
                  <span className='badge bg-warning'>pending</span>
                  <span className='badge bg-warning'>pending</span>
                  <span className='badge bg-warning'>pending</span>
                }

                <div>
                  <button onClick={() => { finishTask(index) }} className='btn btn-primary me-3'>
                    {e.completed ?
                      'Undo'
                      :
                      'Finish'

                    }
                  </button>
                  <button onClick={() => { deleteTask(index) }} className='btn btn-danger'>delete</button>
                </div>
              </div>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default todo
