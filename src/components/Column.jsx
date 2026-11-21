
import TaskCard from "./TaskCard";

function Column({ title, tasks, onDelete, onMove }) {
    return (
        <section className="kanban-column min-w-0 overflow-hidden rounded-2xl border border-[#172B4D]/15 bg-white shadow-[0_6px_24px_rgba(23,43,77,0.05)]">

            {/* Navy Column Header */}
            <div className="flex items-center justify-between gap-3 bg-[#172B4D] px-4 py-4 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-white/80" />

                    <h2 className="truncate text-base font-bold text-white">
                        {title}
                    </h2>
                </div>

                <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-2 text-sm font-semibold text-white">
                    {tasks.length}
                </span>
            </div>

            {/* White Task List */}
            <div className="column-tasks flex min-h-48 flex-col gap-4 bg-white p-4 sm:p-5">
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
                    <div className="empty-message flex min-h-36 flex-col items-center justify-center rounded-xl border border-dashed border-[#172B4D]/20 bg-white px-4 text-center">
                        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#172B4D]/15">
                            <span className="h-2 w-2 rounded-full bg-[#172B4D]" />
                        </span>

                        <p className="text-sm font-semibold text-[#172B4D]">
                            No tasks yet
                        </p>

                        <p className="mt-1 text-xs text-[#172B4D]/60">
                            Tasks added to this status will appear here.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Column;
