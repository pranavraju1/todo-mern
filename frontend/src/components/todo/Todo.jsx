import { useEffect, useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";
let id = sessionStorage.getItem("id");

const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);

  const change = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const submit = async (e) => {
    if (!inputs.title || !inputs.title) {
      return toast.error("fill credentials");
    }
    if (id) {
      await axios
        .post("http://localhost:1000/api/v2/addTask", {
          title: inputs.title,
          body: inputs.body,
          id: id,
        })
        .then((response) => {
          console.log(response);
        });
      // setArray([...array, inputs]);
      setInputs({ title: "", body: "" });
      toast.success("Todo Added");
    } else {
      setArray([...array, inputs]);
      setInputs({ title: "", body: "" });
      toast.error("Log In to Todo Added");
    }
  };

  const del = async (Cardid) => {
    await axios
      .delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`, {
        data: { id: id },
      }) //connecting backend to delete task
      .then((res) => {
        toast.success("Todo Deleted");
      });
  };

  const display = (value) => {
    console.log(value);
    document.getElementById("todo-update").style.display = value;
  };

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:1000/api/v2/getTasks/${id}`)
        .then((res) => {
          setArray(res.data.list);
        });
    };
    fetch();
  }, [submit]);

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
                      id={item._id}
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
