import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../index.css";

const buttonContainerStyle = {
  display: 'flex',
  gap: '20px',
  padding: '10px',
  margin: '10px',
 };

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
      <section className="h-screen font-mono bg-gray-900 flex items-center justify-center text-center text-black text-3xl text-cyan-600">
      <ul className="list-none">
      <li>
      <h1 className="text-white">Create an Account</h1>
      </li>
      <form>
      <li>
        <div>
          <label htmlFor="username" className="text-white"><h1>Username:</h1></label>
          <input type="text" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
      </li>
      <li>
        <div>
          <label htmlFor="password"><h1 className="text-white">Password:</h1></label>
          <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        </li>
        <form  style={buttonContainerStyle}>
        <li>
        <Link to="/">
            <button className="bg-gray-700 hover:bg-blue-100 text-blue-400 py-2 px-4 rounded-full"><h1>Back</h1></button>
          </Link>
        </li>
        <li>
        <button type="submit" onClick={createAccount} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full"><h1>Create Account</h1></button>
        </li>
        </form>
      </form>
      </ul>
      </section>
    </div>
  );
}