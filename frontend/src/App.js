import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/todo/Todo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store";
const App = () => {
  const dispatch = useDispatch();
  // when reload to remember user is logged in
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* exact is to specify which page to open when the website opens */}

          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <About /> */}
    </>
  );
};

export default App;
