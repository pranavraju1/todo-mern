import { useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const change = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const submit = (e) => {
    if (!inputs.title || !inputs.title) {
      return toast.error("fill credentials");
    }
    setArray([...array, inputs]);
    setInputs({ title: "", body: "" });
    toast.success("Todo Added");
  };

  const del = (id) => {
    array.splice(id, "1");
    setArray([...array]);
  };

  const display = (value) => {
    console.log(value);
    document.getElementById("todo-update").style.display = value;
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column todo-inputs w-25">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2"
              name="title"
              value={inputs.title}
              onChange={change}
              required
            />
            <textarea
              type="textarea"
              placeholder="BODY"
              className="p-2"
              onChange={change}
              name="body"
              value={inputs.body}
              required
            />
            <button className="btn" onClick={submit}>
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {array &&
                array.map((item, index) => (
                  <div className="col-lg-3 mx-5 my-2" key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={index}
                      delid={del}
                      dis={display}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container" style={{ backgroundColor: "aqua" }}>
          <Update dis={display} />
        </div>
      </div>
    </>
  );
};

export default Todo;
