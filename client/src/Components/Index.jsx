import { Link } from "react-router-dom";

export default function Index() {
    //This will serve as the default page of the application, holding the name of the game and a create account and login butto
      return (
        <div>
          <h1>Welcome to our App</h1>
          <Link to="/create">
            <button>Create Account</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      );

  }