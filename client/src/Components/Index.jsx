import { Link } from "react-router-dom";
import "../index.css";

const imageFolderPath = "/src/assets";

export default function Index() {
  //This will serve as the default page of the application, holding the name of the game and a create account and login butto
  return (
    <>
      <div className="group bg-gray-900 flex justify-center">
        <img
          src={`${imageFolderPath}/5.png`}
          alt="title"
        />
      </div>

      <div>
        <section className="bg-gray-900 items-center justify-center text-center  text-white">
          <ul className="list-none">
            <li>
              <h1 style={{ fontSize: "88px" }}>Highway to Harmony</h1>
              <Link to="/create">
                <button>
                  <h1 className="text-blue-400" style={{ fontSize: "78px" }}>Create Account</h1>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>
                  <h1 style={{ fontSize: "78px" }}>Login</h1>
                </button>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
