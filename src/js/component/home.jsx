import React, { useState } from "react";
import TodoList from "./TodoList";

function Home() {
  const [titleOn, setTitleOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="text-center bg-div d-flex justify-content-center px-2">
        <div
          className={`my-4 bg-box px-md-5 px-3 pt-5 col-12 col-lg-6 ${
            titleOn ? " pb-4" : " pb-5"
          }`}
        >
          <div className="d-flex align-items-center flex-column flex-md-row ">
            {/*TITLE */}

            <h1
              className={`flex-fill fw-bolder me-0 me-md-5 mb-4 mb-md-0 ${
                titleOn ? "bg-title-on " : "bg-title-off "
              } fs-1 p-5 text-center`}
              onClick={() => setTitleOn(!titleOn)}
            >
              Click to Open the Todolist App Using React and Fetch
            </h1>

            {/*DARK MODE CHECKBOX */}

            <div className="d-flex flex-column align-items-center">
              <div className="container ">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onClick={() => setDarkMode(!darkMode)}
                />
                <label className="switch" htmlFor="checkbox">
                  <span className="slider"></span>
                </label>
              </div>
              {/*dark mode title*/}
              <h1 className="fs-2 mt-3">Dark Mode</h1>
            </div>
          </div>
          {/*TODOLIST */}

          {titleOn && <TodoList />}
        </div>
      </div>
    </>
  );
}

export default Home;
