import { Link } from "react-router-dom";

export default function Index() {
    //This will serve as the default page of the application, holding the name of the game and a create account and login butto
      return (
        <div className="group">
          <section className="h-screen bg-orange-100 flex items-center justify-center m-12 text-center text-3xl text-cyan-600">
          <h1>Welcome to our Oregon-Trail inspired Game!</h1>
          <Link to="/create"> 
            <button>Create Account</button>
          </Link> 
          <Link to="/login">
            <button>Login</button>
          </Link>  
          </section>
        </div>
      );

  }