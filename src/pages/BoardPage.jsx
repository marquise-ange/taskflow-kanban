
import { Link } from "react-router-dom";
import Column from "../components/Column";

function BoardPage({ tasks, onDelete }) {
    const todoTasks = tasks.filter((task) => task.status === "todo");

    const inProgressTasks = tasks.filter(
        (task) => task.status === "in-progress"
    );

    const doneTasks = tasks.filter((task) => task.status === "done");

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

            <div className="kanban-board">
                <Column
                    title="To Do"
                    tasks={todoTasks}
                    onDelete={onDelete}
                />

                <Column
                    title="In Progress"
                    tasks={inProgressTasks}
                    onDelete={onDelete}
                />

                <Column
                    title="Done"
                    tasks={doneTasks}
                    onDelete={onDelete}
                />
            </div>
        </main>
    );
}

export default BoardPage;