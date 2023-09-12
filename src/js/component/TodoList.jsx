import React, { useState, useEffect } from "react";

function TodoList({ darkMode }) {
  // Every task:
  const [todoInput, setTodoInput] = useState("");

  // List of tasks:
  const [data, setData] = useState(null); //or [] but better null to avoid bug

  // Number of items to count them at the bottom:
  const [items, setItems] = useState(null);

  // API REQUESTS: /////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////

  // CREATE USER //////////////////////////////////////////////////////////

  // useEffect(() => {

  //   const requestOptions = {
  //     method: 'POST',
  //     body: JSON.stringify([]),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   fetch("https://playground.4geeks.com/apis/fake/todos/user/vanesa", requestOptions)
  //     .then( response =>  response.json())
  //     .then(result => setData(result))
  // }, []);

  //////////////////////////////////////////////////////////////////////////////////////

  // GET THE DATA ///////////////////////////////////////////////////////////////////

  // requestsOptions are not necessary, by default it's 'GET':

  // const requestOptions = {
  //   method: 'GET',
  // };

  const fetchTodos = () => {
    setTimeout(() => {
      fetch("https://playground.4geeks.com/apis/fake/todos/user/vanesascode")
        .then((response) => response.json())
        .then((result) => setData(result))
        // .then(data => console.log(data))
        .catch((error) => console.log("Error:", error));
    }, 1000);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  ///////////////////////////////////////////////////////////

  // ADD TASKS //

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setData([...data, { label: todoInput, done: false }]);
      setTodoInput("");
    }
  };

  ////////////////////////////////////////////////////////////

  // UPDATE DATA //

  useEffect(() => {
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(
      "https://playground.4geeks.com/apis/fake/todos/user/vanesascode",
      requestOptions
    )
      .then((data) => {
        if (data.result === "ok") {
          fetchTodos();
        } else {
          console.log("Failed to create new todo");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [data]);

  ///////////////////////////////////////////////////////////////////////////////

  // DELETE TASKS //

  const deleteTodo = (task) => {
    console.log(task);
    task.done = true;
    const newData = data.filter((e) => e.done != true);
    setData(newData);
  };

  /////////////////////////////////////////////////////////////////////////////////

  //Counter of number of tasks:

  useEffect(() => {
    if (data) {
      const itemsLeft = data.length;
      setItems(itemsLeft);
    }
  }, [data]);

  /////////////////////////////////////////////////////////////////////////////////

  const [inputOn, setInputOn] = useState(false);

  return (
    <>
      <div className=" d-flex justify-content-start flex-column border-0 z-3 mt-3 mt-md-5">
        {/* input*/}

        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add here your tasks to be done"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
          onFocus={() => setInputOn(true)}
          onBlur={() => setInputOn(false)}
          className={`mb-5 border-0 px-md-5 px-4 py-3 fs-2 ${
            darkMode ? "input-dark" : "input-off"
          } ${inputOn ? "input-on" : "input-off"}`}
        />

        {/* tasks + counter*/}
        <div className={` ${darkMode ? "list-dark" : "list"} p-3`}>
          {/* tasks*/}

          {!data && (
            <div
              className={`text-start ps-2 ps-md-4 fs-2 py-3 ${
                darkMode ? "loading-message" : "loading-message-dark"
              }`}
            >
              Loading tasks...
            </div>
          )}
          {/* {data.length === 0 && <h1>NO TASKS</h1>} --- It gives console error, because the API never has 0 tasks */}
          {data &&
            data.map((task, index) => (
              <div
                key={index}
                className=" w-full px-md-4 px-1 py-3 d-flex justify-content-between fs-2"
              >
                <div className={` ${darkMode ? "task-dark" : "task"} me-5`}>
                  {task.label}
                </div>

                {/* erase button*/}

                <div>
                  <button
                    className={`border-0 px-3 ${
                      darkMode ? "button-dark" : "button"
                    }`}
                    onClick={() => deleteTodo(task)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
        </div>
        {/* counter*/}

        <div className="d-flex justify-content-center mt-4  ">
          <div>
            <h2
              className={`fw-bolder fs-2 ${
                darkMode ? "items-left-dark" : "items-left"
              }`}
            >
              {" "}
              {items} {items === 1 ? "Item" : "Items"} Left
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;

//CONSIDER ALL THE OPTIONS
// null === loading
// [] === empty lists with tasks
// [dsa,dsa,dsa] === list with tasks
