import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
const TodoCards = ({ title, body, id, delid, dis }) => {
  return (
    <div className="p-3 todo-cards">
      <div>
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
      <div className="d-flex justify-content-around">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            dis("block");
          }}
        >
          <GrDocumentUpdate />
          Update
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            delid(id);
          }}
        >
          <MdDelete />
          Delete
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TodoCards;
