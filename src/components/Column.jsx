
import TaskCard from "./TaskCard";

function Column({ title, tasks, onDelete, onMove }) {
    const statusColors = {
        "To Do": "bg-[#44546F]",
        "In Progress": "bg-[#0C66E4]",
        "Done": "bg-[#22A06B]",
    };

    return (
        <section className="kanban-column w-full min-w-0 rounded-lg bg-[#F4F5F7] p-1 sm:p-3">

            {/* Column Header */}
            <div className="mb-2 flex min-w-0 items-center justify-between gap-1 px-0.5 py-2 sm:mb-3 sm:gap-3 sm:px-1">

                <div className="flex min-w-0 items-center gap-1 sm:gap-2">
                    <span
                        className={`h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5 ${statusColors[title] || "bg-[#44546F]"
                            }`}
                    />

                    <h2 className="min-w-0 break-words text-[10px] font-semibold leading-tight text-[#172B4D] sm:text-sm">
                        {title}
                    </h2>
                </div>

                <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-[#DFE1E6] px-1 text-[10px] font-semibold text-[#44546F] sm:h-6 sm:min-w-6 sm:px-2 sm:text-xs">
                    {tasks.length}
                </span>
            </div>

            {/* Task List */}
            <div className="column-tasks flex min-h-48 min-w-0 flex-col gap-2 sm:gap-3">
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
                    <div className="flex min-h-24 min-w-0 flex-col items-center justify-center rounded-md border border-dashed border-[#C1C7D0] bg-white/60 px-1 text-center sm:min-h-32 sm:px-4">
                        <p className="text-[10px] font-medium text-[#44546F] sm:text-sm">
                            No tasks
                        </p>

                        <p className="mt-1 hidden text-xs text-[#8590A2] sm:block">
                            Tasks will appear here.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Column;
