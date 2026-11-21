
import { useState } from "react";
import { Link } from "react-router-dom";

import Column from "../components/Column";
import AddTaskForm from "../components/AddTaskForm";
import FilterBar from "../components/FilterBar";
import useTaskFilter from "../hooks/useTaskFilter";

function BoardPage({ tasks, onDelete, onAdd, onMove }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("All");
    const [showAddTask, setShowAddTask] = useState(false);

    const filteredTasks = useTaskFilter(
        tasks,
        searchQuery,
        priorityFilter
    );

    const todoTasks = filteredTasks.filter(
        (task) => task.status === "todo"
    );

    const inProgressTasks = filteredTasks.filter(
        (task) => task.status === "in-progress"
    );

    const doneTasks = filteredTasks.filter(
        (task) => task.status === "done"
    );

    return (
        <main className="board-page min-h-screen bg-[#F4F5F7] px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1600px]">

                {/* Workspace Header */}
                <header className="mb-7">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#626F86]">
                                TaskFlow Workspace
                            </p>

                            <h1 className="text-2xl font-bold tracking-tight text-[#172B4D]">
                                My Task Board
                            </h1>

                            <p className="mt-1 text-sm text-[#626F86]">
                                Organize your work and track your progress.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowAddTask(!showAddTask)}
                            className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-[#0C66E4] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0747A6] focus:outline-none focus:ring-2 focus:ring-[#0C66E4]/30 focus:ring-offset-2 sm:self-auto"
                        >
                            <span className="text-lg leading-none">+</span>
                            Create Task
                        </button>
                    </div>

                    {/* Page Navigation */}
                    <nav
                        aria-label="Board navigation"
                        className="mt-6 flex items-center gap-6 border-b border-[#DFE1E6]"
                    >
                        <Link
                            to="/"
                            aria-current="page"
                            className="border-b-2 border-[#0C66E4] px-1 pb-3 text-sm font-semibold text-[#0C66E4]"
                        >
                            Board
                        </Link>

                        <Link
                            to="/archive"
                            className="px-1 pb-3 text-sm font-medium text-[#626F86] transition hover:text-[#172B4D]"
                        >
                            Archive
                        </Link>
                    </nav>
                </header>

                {/* Add Task Form */}
                {showAddTask && (
                    <section className="mb-6" aria-label="Create a task">
                        <AddTaskForm
                            onAdd={(task) => {
                                onAdd(task);
                                setShowAddTask(false);
                            }}
                        />
                    </section>
                )}

                {/* Search and Filter Toolbar */}
                <section className="mb-6">
                    <FilterBar
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        priorityFilter={priorityFilter}
                        onPriorityChange={setPriorityFilter}
                    />
                </section>

                {/* Board Heading */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <div>
                        <h2 className="text-base font-bold text-[#172B4D]">
                            Board
                        </h2>
                        <p className="mt-1 text-xs text-[#626F86]">
                            Manage your tasks across three workflow stages.
                        </p>
                    </div>

                    <p className="text-xs font-medium text-[#626F86]">
                        {filteredTasks.length} {filteredTasks.length === 1 ? "task" : "tasks"}
                    </p>
                </div>

                {/* Horizontal Kanban Board */}
                <section
                    aria-label="Kanban task board"
                    className="w-full overflow-x-auto pb-4"
                >
                    <div className="kanban-board grid min-w-[900px] grid-cols-3 items-start gap-4">

                        {/* To Do Column */}
                        <Column
                            title="To Do"
                            tasks={todoTasks}
                            onDelete={onDelete}
                            onMove={onMove}
                        />

                        {/* In Progress Column */}
                        <Column
                            title="In Progress"
                            tasks={inProgressTasks}
                            onDelete={onDelete}
                            onMove={onMove}
                        />

                        {/* Done Column */}
                        <Column
                            title="Done"
                            tasks={doneTasks}
                            onDelete={onDelete}
                            onMove={onMove}
                        />

                    </div>
                </section>
            </div>
        </main>
    );
}

export default BoardPage;
