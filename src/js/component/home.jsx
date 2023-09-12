import React, { useState } from "react";
import TodoList from "./TodoList";

function Home() {
  const [titleOn, setTitleOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

  return (
    <>
      <div className="text-center d-flex justify-content-center px-2 bg-div">
        <div
          className={`my-md-4 mt-2 ${
            darkMode ? "bg-box-dark" : "bg-box"
          }  px-md-5 px-3 pt-5 col-12 col-lg-6 ${titleOn ? " pb-4" : " pb-5"}`}
        >
          <div className="d-flex align-items-center flex-column flex-md-row ">
            {/*TITLE */}

            <h1
              className={`title flex-fill fw-bolder me-0 me-md-5 mb-4 mb-md-0 
              ${darkMode ? "bg-title-dark" : "bg-title-off"} ${
                titleOn ? "bg-title-on " : "bg-title-off "
              } display-5 p-4 text-center 
             `}
              onClick={() => setTitleOn(!titleOn)}
            >
              {titleOn
                ? "Click to close the todolist"
                : "Click to open the todolist"}
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
                  <span
                    className={`slider ${
                      darkMode ? "slider-dark" : "slider-light"
                    }`}
                  ></span>
                </label>
              </div>
              {/*dark mode title*/}
              <p
                className={`fs-3 mt-3 ${darkMode ? "checkbox-title-dark" : ""}`}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </p>
            </div>
          </div>
          {/*TODOLIST */}

          {titleOn && <TodoList darkMode={darkMode} />}
        </div>
      </div>
    </>
  );
}

export default Home;
