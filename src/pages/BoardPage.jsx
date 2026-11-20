
import { useState } from "react";
import { Link } from "react-router-dom";

import Column from "../components/Column";
import AddTaskForm from "../components/AddTaskForm";
import useTaskFilter from "../hooks/useTaskFilter";

function BoardPage({ tasks, onDelete, onAdd, onMove }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("All");

    const filteredTasks = useTaskFilter(
        tasks,
        searchQuery,
        priorityFilter
    );

    const todoTasks = filteredTasks.filter(
        (task) => task.status === "todo"
    );

    const inProgressTasks = filteredTasks.filter(
        (task) => task.status === "in-progress"
    );

    const doneTasks = filteredTasks.filter(
        (task) => task.status === "done"
    );

    return (
        <main className="board-page">
            <header className="board-header">
                <div>
                    <h1>My Task Board</h1>
                    <p>Organize your work and get things done.</p>
                </div>

                <nav>
                    <Link to="/">Board</Link>
                    <Link to="/archive">Archive</Link>
                </nav>
            </header>

            <AddTaskForm onAdd={onAdd} />

            <section className="task-filters">
                <div className="search-group">
                    <label htmlFor="task-search">Search Tasks</label>

                    <input
                        id="task-search"
                        type="text"
                        placeholder="Search by title or description..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </div>

                <div className="filter-group">
                    <label htmlFor="priority-filter">Filter by Priority</label>

                    <select
                        id="priority-filter"
                        value={priorityFilter}
                        onChange={(event) => setPriorityFilter(event.target.value)}
                    >
                        <option value="All">All Priorities</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </section>

            <div className="kanban-board">
                <Column
                    title="To Do"
                    tasks={todoTasks}
                    onDelete={onDelete}
                    onMove={onMove}
                />

                <Column
                    title="In Progress"
                    tasks={inProgressTasks}
                    onDelete={onDelete}
                    onMove={onMove}
                />

                <Column
                    title="Done"
                    tasks={doneTasks}
                    onDelete={onDelete}
                    onMove={onMove}
                />
            </div>
        </main>
    );
}

export default BoardPage;
