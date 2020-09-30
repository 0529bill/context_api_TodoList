import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

export const TaskListContext = React.createContext();

const TaskListContextProvidor = (props) => {
  let initialState = JSON.parse(localStorage.getItem("task")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [edit, setEdit] = useState("");

  useEffect(() => localStorage.setItem("task", JSON.stringify(tasks)), [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title: title, id: uuidv4() }]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks);
  };

  const clearTask = () => setTasks([]);

  const searchId = (id) => {
    if (id) {
      let selectedTask = tasks.filter((task) => (task.id == id ? task : null));
      setEdit(selectedTask[0]);
      console.log(edit);
    }
  };

  const editTask = (title, id) => {
    let newTask = tasks.map((task) => (task.id == id ? { title, id } : task));
    setTasks(newTask);
    setEdit("");
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        clearTask,
        searchId,
        editTask,
        edit,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvidor;
