import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-primary">
          Grupo 5
        </Link>
      </div>
      <div className="flex-none gap-4">
        <Link
          to="/"
          className={`btn btn-ghost text-lg ${
            isActive("/") ? "btn-active text-primary" : ""
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/quizz"
          className={`btn btn-ghost text-lg ${
            isActive("/quizz") ? "btn-active text-primary" : ""
          }`}
        >
          Quizz
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
