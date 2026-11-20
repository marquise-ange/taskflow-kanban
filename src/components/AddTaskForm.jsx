
import { useState } from "react";

function AddTaskForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            id: crypto.randomUUID(),
            title: title.trim(),
            description: description.trim(),
            status: "todo",
            priority,
            createdAt: new Date().toISOString().split("T")[0],
            archived: false,
        };

        onAdd(newTask);

        setTitle("");
        setDescription("");
        setPriority("Medium");
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <h2>Create a New Task</h2>

            <div className="form-group">
                <label htmlFor="new-task-title">Task Title</label>
                <input
                    id="new-task-title"
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="new-task-description">Description</label>
                <textarea
                    id="new-task-description"
                    placeholder="Describe your task"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows="4"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="new-task-priority">Priority</label>
                <select
                    id="new-task-priority"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;
