import React, { useState, useEffect } from "react";

function TodoList() {

  // Every task:
  const [todoInput, setTodoInput] = useState("");

  // List of tasks:
  const [data, setData] = useState([]);

  // Number of items to count them at the bottom:
  const [items, setItems] = useState(0);
  

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
      fetch("https://playground.4geeks.com/apis/fake/todos/user/vanesascode")
      .then(response => response.json()) 
      .then(result => setData(result))
      // .then(data => console.log(data))
      .catch(error => console.log('Error:', error));
    }

  useEffect(() => {
    
    fetchTodos()

  }, []);

  ///////////////////////////////////////////////////////////

  // ADD TASKS //

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setData([...data, {label:todoInput, done:false}]);
      setTodoInput("");
    }
  }

  ////////////////////////////////////////////////////////////

  // UPDATE DATA //

  useEffect(() => {

   const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(data),
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://playground.4geeks.com/apis/fake/todos/user/vanesascode", requestOptions)
      .then(data => {
        if (data.result === "ok") {
          fetchTodos();
        } else {
          console.log("Failed to create new todo");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });

  }, [data]);


  ///////////////////////////////////////////////////////////////////////////////

    // DELETE TASKS //

    const deleteTodo = (task) => {
      console.log(task) 
      task.done = true
      const newData = data.filter(e => e.done != true)
      setData(newData)
    }

  /////////////////////////////////////////////////////////////////////////////////

  //Counter of number of tasks: 

  useEffect(() => {
    const itemsLeft = data.length;
    setItems(itemsLeft);
  }, [data]);

  /////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-4">
        <div className="layer1 d-flex justify-content-start flex-column border-0 shadow z-3">
          
          {/* input*/}

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
            className="border-0 px-5 py-3 input fs-2"
          />

          {/* tasks*/}

          {data.map((task, index) => (
            <div
              key={index}
              className="bg-white item-box border-top w-full px-5 py-3 d-flex justify-content-between fs-2"
              onClick={() => deleteTodo(task)}
            >
             
              <div className="me-5">{task.label}</div>

          {/* erase button*/}

              <div>
                <button>X</button>
              </div>
            </div>
          ))}

          {/* number of tasks in the list*/}

          <div className="d-flex justify-content-end border-top bg-white">
            <div className="py-2 px-5 fs-5 bg-white">
              {items} {items === 1 ? "item" : "items"} left
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TodoList;