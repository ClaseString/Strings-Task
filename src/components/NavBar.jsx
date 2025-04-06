// import { Link, useLocation } from "react-router-dom";

// const NavBar = () => {
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="navbar bg-base-100 shadow-md px-6">
//       <div className="flex-1">
//         <Link to="/" className="text-2xl font-bold text-primary">
//           Grupo 5
//         </Link>
//       </div>
//       <div className="flex-none gap-4">
//         <Link
//           to="/"
//           className={`btn btn-ghost text-lg ${
//             isActive("/") ? "btn-active text-primary" : ""
//           }`}
//         >
//           Inicio
//         </Link>
//         <Link
//           to="/methods"
//           className={`btn btn-ghost text-lg ${
//             isActive("/") ? "btn-active text-primary" : ""
//           }`}
//         >
//           Métodos
//         </Link>
//         <Link
//           to="/quizz"
//           className={`btn btn-ghost text-lg ${
//             isActive("/quizz") ? "btn-active text-primary" : ""
//           }`}
//         >
//           Quizz
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NavBar;



import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra el menú al navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 sm:px-6">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-primary">
          Grupo 5
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-2">
        <Link
          to="/"
          className={`btn btn-ghost text-base ${
            isActive("/") ? "btn-active text-primary" : ""
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/methods"
          className={`btn btn-ghost text-base ${
            isActive("/methods") ? "btn-active text-primary" : ""
          }`}
        >
          Métodos
        </Link>
        <Link
          to="/quizz"
          className={`btn btn-ghost text-base ${
            isActive("/quizz") ? "btn-active text-primary" : ""
          }`}
        >
          Quizz
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="btn btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 bg-base-100 shadow-lg rounded-box w-40 z-50">
            <ul className="menu p-2">
              <li>
                <Link
                  to="/"
                  className={isActive("/") ? "text-primary font-semibold" : ""}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/methods"
                  className={isActive("/methods") ? "text-primary font-semibold" : ""}
                >
                  Métodos
                </Link>
              </li>
              <li>
                <Link
                  to="/quizz"
                  className={isActive("/quizz") ? "text-primary font-semibold" : ""}
                >
                  Quizz
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
