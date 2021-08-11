import React from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = React.useState({
    tname: "",
    description: "",
    dueDate: ""
  })
  const [todoList, setList] = React.useState([])

  function onHandleSubmit(e) {
    e.preventDefault()

    const addTodo = {
      id: new Date().getTime(),
      todoName: todo.tname,
      description: todo.description,
      dueDate: todo.dueDate,
      complete: false
    };
    setList([...todoList].concat(addTodo));
    setTodo({
      tname: "",
      description: "",
      dueDate: ""
    })
    console.log(todoList);
  }
  function deleteTodo(id) {
    let todoUpdatedList = [...todoList].filter((todo) => todo.id !== id)
    setList(todoUpdatedList)
  }

  function edit(id) {

  }

  function complete(id) {
    let todoUpdatedList = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })

    setList(todoUpdatedList)
    console.log(todoList);
  }

  return (
    <div className="todo">
      <h1>To Do </h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={todo.tname}
          name="tname"
          placeholder="Task Name"
          onChange={(e) => setTodo({ ...todo, tname: e.target.value })}
        />
        <input
          type="text"
          value={todo.description}
          name="description"
          placeholder="description"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <input
          type="date"
          value={todo.dueDate}
          name="dueDate"
          placeholder="description"
          onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
        />
        <button>Add</button>
      </form>
      {todoList.map((data) => (
        <div key={data.id} className="list-style">
          <div className="buttons">
            <div className="todo-style">
              {data.todoName}
            </div><div className="todo-style">
              {data.description}
            </div>
            <div className="todo-style">
              {data.dueDate}
            </div>
            <button onClick={() => deleteTodo(data.id)} > Delete</button>
            {data.complete === true
              ? <button onClick={() => complete(data.id)}> Complete</button>
              : <button className="completed" onClick={() => complete(data.id)}> Completed</button>
            }
          </div>
        </div>
      ))}
    </div>

  );
}

export default App;
