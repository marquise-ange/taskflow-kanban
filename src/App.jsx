import { useState } from "react";
import initialTasks from "./data/initialTasks";
import BoardPage from "./pages/BoardPage";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  //Delete Task
  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  //Move a task to another column
  const moveTask = (taskId, newstatus) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) => task.id === taskId ? { ...task, status: newStatus }
        : task
      )
    );
  };

  //update an existing task
  const updateTask = (taskId, udateData) => {
    setTasks((previousTasks) => previousTasks.map((task) => task.id === taskId ? { ...task, ...udateData } : task
    )
    );
  };
  return (
    <BoardPage tasks={tasks} onDelete={deleteTask} />
  );

}

export default App;