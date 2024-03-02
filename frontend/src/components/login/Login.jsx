import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/login", inputs)
      .then((response) => {
        console.log(response.data.others._id);
        history("/todo");
        // if (response.data.message === "User already exists") {
        //   alert(response.data.message);
        // } else {
        //   alert(response.data.message);
        //   setInputs({ email: "", username: "", password: "" });
        // }
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
              In
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
