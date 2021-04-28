import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  return (
    <div className="App">
      <form>
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo} //meaning?
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault(); //meaning?
            setTodoArr([
              ...todoArr,
              {
                id: uuidv4(),
                task: todo,
              },
            ]);
            setTodo("");
          }}
        >
          ok
        </button>
      </form>
      <ul>
        {todoArr.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.task}
            <button
              onClick={() =>
                setTodoArr(todoArr.filter((elem) => elem.id !== todoItem.id))
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
