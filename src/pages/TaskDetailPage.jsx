
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function TaskDetailPage({ tasks, onUpdate, onDelete, onArchive }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const task = tasks.find((item) => item.id === id);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("todo");

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
        }
    }, [task]);

    if (!task) {
        return (
            <main className="task-detail-page">
                <h1>Task Not Found</h1>
                <p>The task you are looking for does not exist.</p>
                <Link to="/">Back to Board</Link>
            </main>
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onUpdate(task.id, {
            title: title.trim(),
            description: description.trim(),
            status,
        });

        alert("Task updated successfully!");
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (confirmDelete) {
            onDelete(task.id);
            navigate("/");
        }
    };

    const handleArchive = () => {
        onArchive(task.id);
        navigate("/");
    };

    return (
        <main className="task-detail-page">
            <Link to="/">← Back to Board</Link>

            <header>
                <h1>Task Details</h1>
                <p>View and manage your selected task.</p>
            </header>

            <form onSubmit={handleSubmit} className="task-detail-form">
                <div className="form-group">
                    <label htmlFor="title">Task Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        rows="5"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Task Status</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                    >
                        <option value="todo">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <div className="form-actions">
                    <button type="submit">Save Changes</button>

                    {task.status === "done" && (
                        <button
                            type="button"
                            onClick={handleArchive}
                        >
                            Archive Task
                        </button>
                    )}

                    <button type="button" onClick={handleDelete}>
                        Delete Task
                    </button>
                </div>
            </form>
        </main>
    );
}

export default TaskDetailPage;
