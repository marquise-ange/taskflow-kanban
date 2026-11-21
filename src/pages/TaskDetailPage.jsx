
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
            <main className="flex min-h-screen items-center justify-center bg-white px-4">
                <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[#172B4D]/15 bg-white shadow-lg">
                    <div className="bg-[#172B4D] px-6 py-7 text-center">
                        <h1 className="text-2xl font-bold text-white">
                            Task Not Found
                        </h1>
                        <p className="mt-2 text-sm text-white/70">
                            This task may have been deleted or archived.
                        </p>
                    </div>

                    <div className="p-6 text-center">
                        <Link
                            to="/"
                            className="inline-flex rounded-xl bg-[#172B4D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243D64]"
                        >
                            Back to Board
                        </Link>
                    </div>
                </div>
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
        <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">

                {/* Navigation */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition hover:opacity-65"
                >
                    <span aria-hidden="true">←</span>
                    Back to Board
                </Link>

                {/* Page Header */}
                <header className="mt-6 overflow-hidden rounded-2xl bg-[#172B4D] px-6 py-7 sm:px-8 sm:py-9">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                        TaskFlow Workspace
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Task Details
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
                        Review, update and manage your selected task.
                    </p>
                </header>

                {/* Task Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-7 overflow-hidden rounded-2xl border border-[#172B4D]/15 bg-white shadow-[0_6px_24px_rgba(23,43,77,0.06)]"
                >
                    {/* Form Heading */}
                    <div className="border-b border-[#172B4D]/10 px-5 py-5 sm:px-8">
                        <h2 className="text-lg font-bold text-[#172B4D]">
                            Edit Task Information
                        </h2>

                        <p className="mt-1 text-sm text-[#172B4D]/60">
                            Make changes to your task using the fields below.
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6 p-5 sm:p-8">

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
                                className="w-full rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition placeholder:text-[#172B4D]/40 hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
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
                                className="w-full resize-y rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm leading-6 text-[#172B4D] outline-none transition hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
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
                                className="w-full rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10 sm:max-w-xs"
                            >
                                <option value="todo">To Do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col gap-4 border-t border-[#172B4D]/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                type="submit"
                                className="rounded-xl bg-[#172B4D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#243D64] focus:outline-none focus:ring-2 focus:ring-[#172B4D]/30 focus:ring-offset-2"
                            >
                                Save Changes
                            </button>

                            {task.status === "done" && (
                                <button
                                    type="button"
                                    onClick={handleArchive}
                                    className="rounded-xl border border-[#172B4D]/25 bg-white px-5 py-3 text-sm font-semibold text-[#172B4D] transition hover:bg-[#172B4D] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#172B4D]/20"
                                >
                                    Archive Task
                                </button>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={handleDelete}
                            className="rounded-xl border border-[#172B4D]/25 bg-white px-5 py-3 text-sm font-semibold text-[#172B4D] transition hover:bg-[#172B4D] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#172B4D]/20"
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
