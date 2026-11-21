
import { Link } from "react-router-dom";

function ArchivePage({ tasks, onRestore }) {
    const archivedTasks = tasks.filter((task) => task.archived);

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
            <div className="mx-auto max-w-[1600px]">

                {/* Page Heading */}
                <header className="mb-7">

                    {/* Back to Board */}
                    <Link
                        to="/"
                        className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0C66E4] transition hover:text-[#0747A6]"
                    >
                        <span aria-hidden="true">←</span>
                        Back to Board
                    </Link>

                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#626F86]">
                        TaskFlow Workspace
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-[#172B4D]">
                                Archived Tasks
                            </h1>

                            <p className="mt-1 text-sm text-[#626F86]">
                                Review and restore your previously archived tasks.
                            </p>
                        </div>

                        <span className="rounded-md border border-[#DFE1E6] bg-white px-3 py-2 text-sm font-semibold text-[#44546F]">
                            {archivedTasks.length} {archivedTasks.length === 1 ? "task" : "tasks"}
                        </span>
                    </div>
                </header>

                {/* Archived Tasks */}
                <section aria-label="Archived tasks">
                    {archivedTasks.length > 0 ? (
                        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {archivedTasks.map((task) => (
                                <article
                                    key={task.id}
                                    className="flex min-w-0 flex-col rounded-md border border-[#DFE1E6] bg-white p-4 shadow-sm transition hover:border-[#B3B9C4] hover:shadow-md"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <h2 className="min-w-0 break-words text-sm font-semibold leading-5 text-[#172B4D]">
                                            {task.title}
                                        </h2>

                                        <span
                                            className={`shrink-0 rounded-sm px-2 py-1 text-[10px] font-bold ${priorityStyles[task.priority] ||
                                                "bg-[#F1F2F4] text-[#44546F]"
                                                }`}
                                        >
                                            {task.priority}
                                        </span>
                                    </div>

                                    <p className="mt-3 break-words text-sm leading-5 text-[#44546F]">
                                        {task.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[#F1F2F4] pt-3">
                                        <span className="text-xs text-[#626F86]">
                                            Previous status:
                                        </span>

                                        <span className="rounded-sm bg-[#F1F2F4] px-2 py-1 text-xs font-semibold text-[#44546F]">
                                            {statusLabels[task.status] || task.status}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between gap-3">
                                        <span className="text-xs text-[#8590A2]">
                                            Archived
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => onRestore(task.id)}
                                            className="rounded-md bg-[#0C66E4] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#0747A6] focus:outline-none focus:ring-2 focus:ring-[#0C66E4]/30 focus:ring-offset-2"
                                        >
                                            Restore Task
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-lg border border-dashed border-[#C1C7D0] bg-white px-5 py-16 text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DEEBFF] text-xl text-[#0C66E4]">
                                ✓
                            </div>

                            <h2 className="text-base font-bold text-[#172B4D]">
                                No archived tasks
                            </h2>

                            <p className="mt-2 text-sm text-[#626F86]">
                                Tasks you archive will appear here.
                            </p>

                            <Link
                                to="/"
                                className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0C66E4] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white"
                            >
                                ← Return to Board
                            </Link>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

export default ArchivePage;
