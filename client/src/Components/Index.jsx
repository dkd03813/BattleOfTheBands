import { Link } from "react-router-dom";
import "../index.css";

const imageFolderPath = '/src/assets';

export default function Index() {
    //This will serve as the default page of the application, holding the name of the game and a create account and login butto
      return (
        <div className="group bg-gray-900">
          <img src={`${imageFolderPath}/5.png`} alt="title" />
          <section className="h-screen bg-gray-900 flex items-center justify-center text-center  text-white">
            <ul className="list-none">
          <li><h1>Highway to Harmony</h1>
          <Link to="/create"> 
            <button><h1 className="text-blue-400">Create Account</h1></button>
          </Link></li>
          <li>
          <Link to="/login">
            <button><h1>Login</h1></button>
          </Link>
          </li>
          </ul>  
          </section>
        </div>
      );

  }