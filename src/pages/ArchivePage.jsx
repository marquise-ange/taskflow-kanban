
import { Link } from "react-router-dom";

function ArchivePage({ tasks, onRestore }) {
    const archivedTasks = tasks.filter((task) => task.archived);

    const statusLabels = {
        todo: "To Do",
        "in-progress": "In Progress",
        done: "Done",
    };

    return (
        <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <header className="mb-8 overflow-hidden rounded-2xl bg-[#172B4D] p-6 sm:p-8">
                    <Link
                        to="/"
                        className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
                    >
                        <span aria-hidden="true">←</span>
                        Back to Board
                    </Link>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                                TaskFlow Workspace
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Archived Tasks
                            </h1>

                            <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                                Keep track of completed work and revisit tasks whenever you need them.
                            </p>
                        </div>

                        <div className="w-fit rounded-xl border border-white/25 bg-white/10 px-5 py-3">
                            <p className="text-2xl font-bold text-white">
                                {archivedTasks.length}
                            </p>
                            <p className="text-xs font-medium text-white/75">
                                Archived Tasks
                            </p>
                        </div>
                    </div>
                </header>

                {/* Archived Tasks */}
                <section aria-label="Archived tasks">
                    {archivedTasks.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {archivedTasks.map((task) => (
                                <article
                                    key={task.id}
                                    className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#172B4D]/15 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#172B4D]/30 hover:shadow-md"
                                >
                                    {/* Card Header */}
                                    <div className="flex items-start justify-between gap-3 bg-[#172B4D] px-5 py-4">
                                        <h2 className="min-w-0 break-words text-base font-bold leading-6 text-white">
                                            {task.title}
                                        </h2>

                                        <span className="shrink-0 rounded-lg border border-white/25 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
                                            Archived
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <p className="break-words text-sm leading-6 text-[#172B4D]/70">
                                            {task.description}
                                        </p>

                                        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-[#172B4D]/10 pt-5">
                                            <div>
                                                <p className="mb-2 text-xs font-semibold text-[#172B4D]/60">
                                                    Previous Status
                                                </p>

                                                <span className="inline-flex rounded-lg border border-[#172B4D]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#172B4D]">
                                                    {statusLabels[task.status] || task.status}
                                                </span>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => onRestore(task.id)}
                                                className="rounded-xl bg-[#172B4D] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#243D64] focus:outline-none focus:ring-2 focus:ring-[#172B4D]/30 focus:ring-offset-2"
                                            >
                                                Restore Task
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#172B4D]/25 bg-white px-5 py-16 text-center">
                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#172B4D]">
                                <span className="text-2xl text-white">✓</span>
                            </div>

                            <h2 className="text-lg font-bold text-[#172B4D]">
                                No archived tasks
                            </h2>

                            <p className="mt-2 text-sm text-[#172B4D]/60">
                                Tasks you archive will appear here.
                            </p>

                            <Link
                                to="/"
                                className="mt-6 inline-flex rounded-xl bg-[#172B4D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243D64]"
                            >
                                Return to Board
                            </Link>
                        </div>
                    )}
                </section>

            </div>
        </main>
    );
}

export default ArchivePage;
