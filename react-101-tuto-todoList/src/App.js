import React, { useState } from "react";


const Li = function({td}) {
  const [count, setCount] = useState(0);

  return <li onClick={() => setCount(count + 1)}> {td}--{count} </li>
}

const usePersistence = () => {
  
}

function App() {
  // const inputState = React.useState('');
  // const inputValue = inputState[0];
  // const setInputValue = inputState[1];

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = [...todos, inputValue];
    setTodos(newTodo);
    setInputValue('');
  }

  // const removeTodo = (todo) => {
  //   console.log(todo);
  //   setTodos(todos.filter(t => t !== todo))
  //   // const rmvTodo
  // }
  const removeTodo = (todo) => {

  }

  const List = todos.map((todo, i) => <Li key={i + ' ' + todo} td={todo}/>);

  return (
    <div>
      <h1>To do App</h1>
      <input type="text" placeholder="todos" value={inputValue} onInput={e => setInputValue(e.target.value)}/>
      <button onClick={() => {addTodo(inputValue)}}> add </button>

      <ul>
      {/* { todos.map((todo, i) => 
        <li key={i} onClick={() => removeTodo(todo)}>{todo}</li>
      )} */}
        {List}
      </ul>
    </div>
  );
}

export default App;
