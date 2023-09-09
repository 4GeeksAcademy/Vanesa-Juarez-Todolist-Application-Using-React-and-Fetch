import React, { useState, useEffect } from "react";

function OriginalTodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [items, setItems] = useState(0);

  // To add an item:

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  // To erase an item:

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // To update the number of items in the list:

  useEffect(() => {
    const itemsLeft = todos.length;
    setItems(itemsLeft);
  }, [todos]);

  return (
    <div className="d-flex justify-content-center">
      <div className=" col-md-4 ">
        {/* NOTEBOOK */}
        <div className="layer1 d-flex justify-content-start flex-column border-0 shadow z-3">
          {/* INPUT */}
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="What needs to be done?"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            className="border-0 px-5 py-3 input fs-2 "
          />
          {/* ITERATION OF ITEMS */}

          {todos.map((todo, index) => (
            <div
              key={index}
              className="bg-white item-box border-top w-full px-5 py-3 d-flex justify-content-between fs-2 "
              onClick={() => deleteTodo(index)}
            >
              <div className="me-5">{todo}</div>

              {/* ERASE BUTTON */}
              <div>
                <button>X</button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end border-top bg-white">
            <div className=" py-2 px-5 fs-5 bg-white">{items} {items === 1 ? "item" : "items"} left</div>
          </div>
        </div>

        {/* NUMBER OF ITEMS IN THE LIST */}

        <div className="d-flex justify-content-center invisible-layer">
          {/* DECORATIVE LAYERS */}

          <div className="layer2 border-0 shadow "></div>
          <div className="layer3 border-0 shadow "></div>
        </div>
      </div>
    </div>
  );
}


export default OriginalTodoList;