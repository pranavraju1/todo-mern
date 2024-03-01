import { useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const change = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const submit = (e) => {
    setArray([...array, inputs]);
    setInputs({ title: "", body: "" });
  };
  return (
    <div className="todo">
      <div className="todo-main container d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column todo-inputs w-25">
          <input
            type="text"
            placeholder="TITLE"
            className="my-2 p-2"
            name="title"
            value={inputs.title}
            onChange={change}
          />
          <textarea
            type="textarea"
            placeholder="BODY"
            className="p-2"
            onChange={change}
            name="body"
            value={inputs.body}
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
                <div className="col-lg-3 mx-5 my-2">
                  <TodoCards title={item.title} body={item.body} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
