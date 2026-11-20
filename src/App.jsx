
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import initialTasks from "./data/initialTasks";
import BoardPage from "./pages/BoardPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import ArchivePage from "./pages/ArchivePage";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };

  const moveTask = (taskId, newStatus) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  const updateTask = (taskId, updatedData) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updatedData }
          : task
      )
    );
  };

  const archiveTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, archived: true }
          : task
      )
    );
  };

  const restoreTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, archived: false }
          : task
      )
    );
  };

  const activeTasks = tasks.filter((task) => !task.archived);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BoardPage
            tasks={activeTasks}
            onDelete={deleteTask}
            onAdd={addTask}
            onMove={moveTask}
            onArchive={archiveTask}
          />
        }
      />

      <Route
        path="/task/:id"
        element={
          <TaskDetailPage
            tasks={activeTasks}
            onUpdate={updateTask}
            onDelete={deleteTask}
            onArchive={archiveTask}
          />
        }
      />

      <Route
        path="/archive"
        element={
          <ArchivePage
            tasks={tasks}
            onRestore={restoreTask}
          />
        }
      />
    </Routes>
  );
}

export default App;
