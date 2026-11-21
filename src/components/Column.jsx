
import TaskCard from "./TaskCard";

function Column({ title, tasks, onDelete, onMove }) {
    const statusColors = {
        "To Do": "bg-[#44546F]",
        "In Progress": "bg-[#0C66E4]",
        "Done": "bg-[#22A06B]",
    };

    return (
        <section className="kanban-column min-w-0 rounded-lg bg-[#F4F5F7] p-3">

            {/* Column Header */}
            <div className="mb-3 flex items-center justify-between gap-3 px-1 py-2">
                <div className="flex min-w-0 items-center gap-2">
                    <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${statusColors[title] || "bg-[#44546F]"
                            }`}
                    />

                    <h2 className="truncate text-sm font-semibold text-[#172B4D]">
                        {title}
                    </h2>
                </div>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#DFE1E6] px-2 text-xs font-semibold text-[#44546F]">
                    {tasks.length}
                </span>
            </div>

            {/* Task List */}
            <div className="column-tasks flex min-h-48 flex-col gap-3">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onMove={onMove}
                        />
                    ))
                ) : (
                    <div className="flex min-h-32 flex-col items-center justify-center rounded-md border border-dashed border-[#C1C7D0] bg-white/60 px-4 text-center">
                        <p className="text-sm font-medium text-[#44546F]">
                            No tasks yet
                        </p>

                        <p className="mt-1 text-xs text-[#8590A2]">
                            Tasks will appear here.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Column;
