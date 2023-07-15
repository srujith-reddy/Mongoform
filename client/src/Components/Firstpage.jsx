import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function Firstpage() {
  
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  console.log(username);
  console.log(email);

  const handleClick = () => {
    axios.post('http://localhost:5001', {
      username,
      email
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

      window.location.href="/somemail"
  };
  

  return (
    <div>
    
      <h1> Please fill your details</h1>
      <label>Name</label>
      <input type="text" placeholder="name" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br></br>
      <br></br>
      <br></br>
      <label>Email</label>
      <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <br></br>
      <br></br>
      <button type="submit" onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Firstpage;