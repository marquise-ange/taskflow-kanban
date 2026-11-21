
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import initialTasks from "./data/initialTasks";
import useLocalStorage from "./hooks/useLocalStorage";

import BoardPage from "./pages/BoardPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import ArchivePage from "./pages/ArchivePage";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useLocalStorage(
    "taskflow-tasks",
    initialTasks
  );

  // Simulated loading state
  const [isLoading, setIsLoading] = useState(
    () => localStorage.getItem("taskflow-tasks") === null
  );

  // Simulate a 400ms initial loading period
  useEffect(() => {
    if (!isLoading) return;

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };

  // Change task status
  const moveTask = (taskId, newStatus) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  // Update task information
  const updateTask = (taskId, updatedData) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updatedData }
          : task
      )
    );
  };

  // Archive a task
  const archiveTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, archived: true }
          : task
      )
    );
  };

  // Restore an archived task
  const restoreTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, archived: false }
          : task
      )
    );
  };

  // Display only active tasks on the board
  const activeTasks = tasks.filter((task) => !task.archived);

  // Loading screen
  if (isLoading) {
    return (
      <main className="loading-screen">
        <h1>TaskFlow</h1>
        <p>Preparing your workspace...</p>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Routes>
          {/* Main Kanban Board */}
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

          {/* Task Details */}
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

          {/* Archived Tasks */}
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
