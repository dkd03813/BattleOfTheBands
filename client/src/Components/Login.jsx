// The component for displaying a form that has a username field and a password field
import React from 'react';
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="submit">Enter</button>
        <Link to="/">
            <button>Back</button>
          </Link>
      </form>
    </div>
  );
}