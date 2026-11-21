
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
        <section className="overflow-hidden rounded-lg border border-[#DFE1E6] bg-white shadow-sm">

            {/* Form Header */}
            <div className="border-b border-[#DFE1E6] px-5 py-5 sm:px-7">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#DEEBFF] text-xl font-semibold text-[#0C66E4]">
                        +
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#172B4D]">
                            Create a New Task
                        </h2>

                        <p className="mt-1 text-xs text-[#626F86]">
                            Add a task to your board and keep your work organized.
                        </p>
                    </div>
                </div>
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
                            <span className="ml-1 text-[#AE2E24]">*</span>
                        </label>

                        <input
                            id="new-task-title"
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                            className="w-full min-w-0 rounded-md border border-[#DFE1E6] bg-white px-3 py-2.5 text-sm text-[#172B4D] outline-none transition placeholder:text-[#8590A2] hover:border-[#B3B9C4] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
                        />
                    </div>

                    {/* Description */}
                    <div className="min-w-0">
                        <label
                            htmlFor="new-task-description"
                            className="mb-2 block text-sm font-semibold text-[#172B4D]"
                        >
                            Description
                            <span className="ml-1 text-[#AE2E24]">*</span>
                        </label>

                        <textarea
                            id="new-task-description"
                            placeholder="Describe what needs to be done..."
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            rows={3}
                            required
                            className="w-full min-w-0 resize-y rounded-md border border-[#DFE1E6] bg-white px-3 py-2.5 text-sm leading-5 text-[#172B4D] outline-none transition placeholder:text-[#8590A2] hover:border-[#B3B9C4] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
                        />
                    </div>
                </div>

                {/* Form Footer */}
                <div className="flex flex-col gap-4 border-t border-[#DFE1E6] pt-5 sm:flex-row sm:items-end sm:justify-between">

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
                            className="w-full rounded-md border border-[#DFE1E6] bg-white px-3 py-2.5 text-sm text-[#172B4D] outline-none transition hover:border-[#B3B9C4] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0C66E4] px-7 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0747A6] focus:outline-none focus:ring-2 focus:ring-[#0C66E4]/30 focus:ring-offset-2 sm:w-auto"
                    >
                        <span className="text-lg leading-none">+</span>
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AddTaskForm;
