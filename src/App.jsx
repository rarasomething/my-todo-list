import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const onButtonClick = () => {
    setTodoList([...todoList, value]);
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((e) => (
          <li>{e}</li>
        ))}
      </ul>

      <input onChange={onInputChange} />
      <button onClick={onButtonClick}>Add</button>
    </>
  );
}

export default App;
