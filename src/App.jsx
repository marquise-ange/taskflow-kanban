
import { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import initialTasks from "./data/initialTasks";
import BoardPage from "./pages/BoardPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import ArchivePage from "./pages/ArchivePage";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // Add a task
  const addTask = (newTask) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  // Move a task
  const moveTask = (taskId, newStatus) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  // Update a task
  const updateTask = (taskId, updatedData) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updatedData }
          : task
      )
    );
  };

  return (
    <Routes>

      <Route
        path="/"
        element={
          <BoardPage
            tasks={tasks}
            onDelete={deleteTask}
          />
        }
      />

      <Route
        path="/task/:id"
        element={
          <TaskDetailPage
            tasks={tasks}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        }
      />

      <Route
        path="/archive"
        element={
          <ArchivePage
            tasks={tasks}
          />
        }
      />

    </Routes>
  );
}

export default App;
