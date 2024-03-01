import "./Signup.css";

const Signup = () => {
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
              />
              <input
                type="text"
                placeholder="username"
                className="p-2 m-3"
                name="username"
              />
              <input
                type="password"
                placeholder="password"
                className="p-2 m-3"
                name="password"
              />
              <button className="btn">Signup</button>
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
