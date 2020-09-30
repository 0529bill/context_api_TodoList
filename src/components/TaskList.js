import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <ul className="list">
      {tasks ? tasks.map((task) => <Task key={task.id} props={task} />) : null}
    </ul>
  );
};

export default TaskList;
