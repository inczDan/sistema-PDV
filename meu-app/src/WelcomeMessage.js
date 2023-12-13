// WelcomeMessage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WelcomeMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api').then(response => {
      setMessage(response.data);
    });
  }, []);

  return <h1>{message}</h1>;
}

export default WelcomeMessage;
