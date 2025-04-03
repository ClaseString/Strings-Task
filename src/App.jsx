import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizz" element={<Quizz />} />
          </Routes>
        </main>
        <footer className="w-full h-16 bg-gradient-to-b from-transparent to-secondary mt-auto">
          <div className="container mx-auto flex items-center justify-center h-full">
            <p className="text-base-content text-opacity-80 text-lg">
              Made with ❤️
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
