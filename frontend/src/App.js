import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    // Fetch 'Hello World' message from the backend on button click
    axios.get('/api/hello')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
