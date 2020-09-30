import React, { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  let { addTask, clearTask, edit, editTask } = useContext(TaskListContext);

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(edit.title);
  }, [edit]);

  let handleSubmit = (event) => {
    event.preventDefault(); // so form will not be submitted

    if (edit && title) {
      editTask(title, edit.id);
    } else {
      addTask(title);
      setTitle("");
    }
  };

  let handleChange = (event) => {
    // event.preventDefault();

    let title = event.target.value;

    setTitle(title);
  };

  let button1 = "add task";
  let button2 = "enter";

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="add task!"
        required
        value={title || ""}
      />
      <button type="submit">{edit ? button2 : button1}</button>
      <button onClick={() => clearTask()}>Clear</button>
    </form>
  );
};

export default TaskForm;
