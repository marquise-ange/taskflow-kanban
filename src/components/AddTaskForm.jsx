
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
        <section className="overflow-hidden rounded-2xl border border-[#172B4D]/15 bg-white shadow-[0_6px_24px_rgba(23,43,77,0.06)]">

            {/* Navy Header */}
            <div className="bg-[#172B4D] px-5 py-5 sm:px-7">
                <h2 className="text-xl font-bold tracking-tight text-white">
                    Create a New Task
                </h2>

                <p className="mt-1 text-sm text-white/75">
                    Add a task to your board and keep your work organized.
                </p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="space-y-6 p-5 sm:p-7">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* Task Title */}
                    <div className="min-w-0">
                        <label
                            htmlFor="new-task-title"
                            className="mb-2 block text-sm font-semibold text-[#172B4D]"
                        >
                            Task Title
                        </label>

                        <input
                            id="new-task-title"
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                            className="w-full min-w-0 rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition placeholder:text-[#172B4D]/45 hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
                        />
                    </div>

                    {/* Description */}
                    <div className="min-w-0">
                        <label
                            htmlFor="new-task-description"
                            className="mb-2 block text-sm font-semibold text-[#172B4D]"
                        >
                            Description
                        </label>

                        <textarea
                            id="new-task-description"
                            placeholder="Describe what needs to be done..."
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            rows={3}
                            required
                            className="w-full min-w-0 resize-y rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition placeholder:text-[#172B4D]/45 hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
                        />
                    </div>
                </div>

                {/* Form Footer */}
                <div className="flex flex-col gap-4 border-t border-[#172B4D]/10 pt-5 sm:flex-row sm:items-end sm:justify-between">

                    {/* Priority */}
                    <div className="w-full sm:max-w-xs">
                        <label
                            htmlFor="new-task-priority"
                            className="mb-2 block text-sm font-semibold text-[#172B4D]"
                        >
                            Priority
                        </label>

                        <select
                            id="new-task-priority"
                            value={priority}
                            onChange={(event) => setPriority(event.target.value)}
                            className="w-full rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#172B4D] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#243D64] focus:outline-none focus:ring-2 focus:ring-[#172B4D]/30 focus:ring-offset-2 sm:w-auto"
                    >
                        + Add Task
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AddTaskForm;
