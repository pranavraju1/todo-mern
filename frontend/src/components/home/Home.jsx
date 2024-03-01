import "./Home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <h1>
            Organiz your <br />
            work and life, finally
          </h1>
        </div>
        <div>
          <p>
            Become focused, organozed and calm with <br /> todo app. The
            worlds's #1 task manager app.
          </p>
        </div>
        <div>
          <button className="home-btn">Make Todo List</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
