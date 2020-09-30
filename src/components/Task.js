import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ props }) => {
  let [line, setLine] = useState(false);
  let { deleteTask, searchId } = useContext(TaskListContext);
  let style = {
    textDecoration: "line-through",
  };

  let handleChange = () => {
    setLine(!line);
  };
  return (
    <li className="list-item">
      <span style={line ? style : null}>{props.title}</span>
      <div>
        <button onClick={handleChange}>crossOut</button>
        <button className="btn-delete ml-3" onClick={() => searchId(props.id)}>
          edit
        </button>
        <button
          className="btn-delete ml-3"
          onClick={() => deleteTask(props.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default Task;
