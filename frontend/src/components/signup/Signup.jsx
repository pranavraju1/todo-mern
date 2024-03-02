import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/register", inputs)
      .then((response) => {
        if (response.data.message === "User already exists") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setInputs({ email: "", username: "", password: "" });
          history("/login");
        }
      });
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column">
              <input
                type="email"
                placeholder="email"
                className="p-2 m-3"
                name="email"
                onChange={change}
                value={inputs.email}
              />
              <input
                type="text"
                placeholder="username"
                className="p-2 m-3"
                name="username"
                onChange={change}
                value={inputs.username}
              />
              <input
                type="password"
                placeholder="password"
                className="p-2 m-3"
                name="password"
                onChange={change}
                value={inputs.password}
              />
              <button className="btn" onClick={submit}>
                Signup
              </button>
            </div>
          </div>
          <div className="col-lg-4 column d-flex justify-content-center align-items-center">
            <h1 className="text-center sign-up-heading">
              Sign <br />
              Up
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
