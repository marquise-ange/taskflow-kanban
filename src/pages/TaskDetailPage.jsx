
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function TaskDetailPage({ tasks, onUpdate, onDelete, onArchive }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const task = tasks.find((item) => item.id === id);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("todo");
    const [priority, setPriority] = useState("Medium");

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
            setPriority(task.priority || "Medium");
        }
    }, [task]);

    // Task Not Found
    if (!task) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F4F5F7] px-4">
                <div className="w-full max-w-md rounded-lg border border-[#DFE1E6] bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DEEBFF] text-xl font-bold text-[#0C66E4]">
                        !
                    </div>

                    <h1 className="text-2xl font-bold text-[#172B4D]">
                        Task Not Found
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-[#626F86]">
                        This task may have been deleted or archived.
                    </p>

                    <Link
                        to="/"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0C66E4] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0747A6]"
                    >
                        ← Back to Board
                    </Link>
                </div>
            </main>
        );
    }

    // Update Task
    const handleSubmit = (event) => {
        event.preventDefault();

        onUpdate(task.id, {
            title: title.trim(),
            description: description.trim(),
            status,
            priority,
        });

        alert("Task updated successfully!");
    };

    // Delete Task
    const handleDelete = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (confirmDelete) {
            onDelete(task.id);
            navigate("/");
        }
    };

    // Archive Task
    const handleArchive = () => {
        onArchive(task.id);
        navigate("/");
    };

    const statusStyles = {
        todo: "bg-[#F1F2F4] text-[#44546F]",
        "in-progress": "bg-[#DEEBFF] text-[#0C66E4]",
        done: "bg-[#DCFCE7] text-[#216E4E]",
    };

    const statusLabels = {
        todo: "To Do",
        "in-progress": "In Progress",
        done: "Done",
    };

    const priorityStyles = {
        High: "bg-[#FFE2E0] text-[#AE2E24]",
        Medium: "bg-[#FFF3C9] text-[#974F0C]",
        Low: "bg-[#DCFCE7] text-[#216E4E]",
    };

    return (
        <main className="min-h-screen bg-[#F4F5F7] px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">

                {/* Navigation */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C66E4] transition hover:text-[#0747A6]"
                >
                    <span aria-hidden="true">←</span>
                    Back to Board
                </Link>

                {/* Page Header */}
                <header className="mb-6 mt-6">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#626F86]">
                        TaskFlow Workspace
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-[#172B4D]">
                                Task Details
                            </h1>

                            <p className="mt-1 text-sm text-[#626F86]">
                                Review, update and manage your selected task.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <span
                                className={`rounded-sm px-3 py-1.5 text-xs font-semibold ${statusStyles[task.status] ||
                                    "bg-[#F1F2F4] text-[#44546F]"
                                    }`}
                            >
                                {statusLabels[task.status] || task.status}
                            </span>

                            <span
                                className={`rounded-sm px-3 py-1.5 text-xs font-semibold ${priorityStyles[task.priority] ||
                                    "bg-[#F1F2F4] text-[#44546F]"
                                    }`}
                            >
                                {task.priority || "Medium"} Priority
                            </span>
                        </div>
                    </div>
                </header>

                {/* Task Form */}
                <form
                    onSubmit={handleSubmit}
                    className="overflow-hidden rounded-lg border border-[#DFE1E6] bg-white shadow-sm"
                >
                    {/* Form Heading */}
                    <div className="border-b border-[#DFE1E6] px-5 py-5 sm:px-7">
                        <h2 className="text-base font-bold text-[#172B4D]">
                            Edit Task Information
                        </h2>

                        <p className="mt-1 text-sm text-[#626F86]">
                            Update the information below and save your changes.
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6 p-5 sm:p-7">

                        {/* Title */}
                        <div>
                            <label
                                htmlFor="title"
                                className="mb-2 block text-sm font-semibold text-[#172B4D]"
                            >
                                Task Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                required
                                className="w-full rounded-md border border-[#DFE1E6] bg-white px-3 py-2.5 text-sm text-[#172B4D] outline-none transition hover:border-[#B3B9C4] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-semibold text-[#172B4D]"
                            >
                                Description
                            </label>

                            <textarea
                                id="description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                rows={5}
                                required
                                className="w-full resize-y rounded-md border border-[#DFE1E6] bg-white px-3 py-2.5 text-sm leading-6 text-[#172B4D] outline-none transition hover:border-[#B3B9C4] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <label
                                htmlFor="status"
                                className="mb-2 block text-sm font-semibold text-[#172B4D]"
                            >
                                Task Status
                            </label>

                            <select
                                id="status"
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                                className="w-full rounded-md border border-[#DFE1E6] bg-white px-3 py-2.5 text-sm text-[#172B4D] outline-none transition hover:border-[#B3B9C4] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10 sm:max-w-xs"
                            >
                                <option value="todo">To Do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        {/* Priority */}
                        <div>
                            <label
                                htmlFor="priority"
                                className="mb-2 block text-sm font-semibold text-[#172B4D]"
                            >
                                Task Priority
                            </label>

                            <select
                                id="priority"
                                value={priority}
                                onChange={(event) => setPriority(event.target.value)}
                                className="w-full rounded-md border border-[#DFE1E6] bg-white px-3 py-2.5 text-sm text-[#172B4D] outline-none transition hover:border-[#B3B9C4] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10 sm:max-w-xs"
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col gap-3 border-t border-[#DFE1E6] bg-[#FAFBFC] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                type="submit"
                                className="rounded-md bg-[#0C66E4] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0747A6] focus:outline-none focus:ring-2 focus:ring-[#0C66E4]/30 focus:ring-offset-2"
                            >
                                Save Changes
                            </button>

                            {task.status === "done" && (
                                <button
                                    type="button"
                                    onClick={handleArchive}
                                    className="rounded-md border border-[#DFE1E6] bg-white px-5 py-2.5 text-sm font-semibold text-[#44546F] transition hover:border-[#B3B9C4] hover:bg-[#F1F2F4] focus:outline-none focus:ring-2 focus:ring-[#0C66E4]/20"
                                >
                                    Archive Task
                                </button>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={handleDelete}
                            className="rounded-md border border-[#DFE1E6] bg-white px-5 py-2.5 text-sm font-semibold text-[#AE2E24] transition hover:border-[#AE2E24] hover:bg-[#FFF0EF] focus:outline-none focus:ring-2 focus:ring-[#AE2E24]/20"
                        >
                            Delete Task
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default TaskDetailPage;
