import React, { useEffect, useState } from 'react';

function APIgithubHookTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }
}

export default APIgithubHookTest;
