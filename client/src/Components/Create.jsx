import React, {useState} from 'react';
import { Link } from "react-router-dom";

export default function Create() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const createAccount = async (e) => {
       e.preventDefault()
        console.log('Create Account button clicked');
        try {
          const response = await fetch('http://localhost:3000/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });
    
          if (!response.ok) {
            throw new Error('Create Failed');
          }
    
          const data = await response.json();
          console.log(data.message); 
        } catch (error) {
          console.error('Error:', error);
        }
      };
    

  return (
    <div>
      <h1>Create an Account</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={createAccount}>Create Account</button>
        <Link to="/">
            <button>Back</button>
          </Link>
      </form>
    </div>
  );
}