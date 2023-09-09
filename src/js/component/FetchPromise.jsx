import React, { useEffect, useState } from 'react';

function FetchPromise() {
  const [data, setData] = useState([]);

  useEffect(() => {

    // Estos parametros no son necesarios, por default es 'GET'


    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async response => await response.json()) // ES NECESARIO EL ASYNC Y EL AWAIT AQUI???? PODRIA SER INTERESANTE? 
      .then(result => setData(result))
      .catch(error => console.log('Error:', error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchPromise;