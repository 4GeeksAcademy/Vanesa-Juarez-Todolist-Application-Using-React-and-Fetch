import React from 'react';
// import FetchPromise from './FetchPromise';
// import FetchAsync from './FetchAsync';
import TodoList from './TodoList';
import OriginalTodoList from './OriginalTodoList';


function Home() {
  
  return (
    <>
   
 {/* TODO LIST */}
    <div className="text-center mb-5">
      <h1 className="text-grey my-4 title ">Todos with Fetch and API</h1>
      <div>
        <TodoList />
      </div>
    </div>

    {/* ORIGINAL TODO LIST */}
    
    <div className="text-center mt-5">
    <h1 className="text-grey my-4 title ">Original Todos List</h1>
      <OriginalTodoList />
    </div>


    {/*EXAMPLES OF FETCHING DATA*/}
    
    <div className='bg-warning mt-5'>
      {/* <FetchAsync /> */}
    </div>

   <div className='bg-success'>
      {/* <FetchPromise /> */}
    </div>

    </>
  );
}

export default Home;