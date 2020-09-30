import React from "react";
import TaskListContextProvidor from "../context/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";

const App = () => {
  return (
    <TaskListContextProvidor>
      <div id="all">
        <div className="  " id="content">
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvidor>
  );
};

export default App;
