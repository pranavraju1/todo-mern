import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
const TodoCards = ({ title, body }) => {
  return (
    <div className="p-3 todo-cards">
      <div>
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
      <div className="d-flex justify-content-around">
        <div style={{ cursor: "pointer" }}>
          <GrDocumentUpdate />
          Update
        </div>
        <div style={{ cursor: "pointer" }}>
          <MdDelete />
          Delete
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TodoCards;
