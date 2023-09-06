import React, { useEffect, useState } from 'react';
import FetchPromise from './FetchPromise';
import FetchAsync from './FetchAsync';

function Home() {
  
  return (
    <>

    <div className='bg-warning'>
      <FetchAsync />
    </div>

   <div className='bg-success'>
      <FetchPromise />
    </div>

    </>
  );
}

export default Home;