import React, { useEffect, useState } from 'react';

function FetchPromise() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
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