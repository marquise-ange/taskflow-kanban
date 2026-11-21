
import { useState } from "react";
import { Link } from "react-router-dom";

import Column from "../components/Column";
import AddTaskForm from "../components/AddTaskForm";
import useTaskFilter from "../hooks/useTaskFilter";

function BoardPage({ tasks, onDelete, onAdd, onMove }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("All");

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
        <main className="board-page min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-8">

                {/* Dashboard Header */}
                <header className="overflow-hidden rounded-2xl bg-[#172B4D] px-6 py-7 sm:px-8 sm:py-9">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                                TaskFlow Workspace
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                My Task Board
                            </h1>

                            <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                                Plan your work, manage your priorities and keep everything moving.
                            </p>
                        </div>

                        {/* Navigation */}
                        <nav
                            aria-label="Main navigation"
                            className="flex w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/10 p-1.5"
                        >
                            <Link
                                to="/"
                                aria-current="page"
                                className="rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#172B4D] shadow-sm transition hover:bg-white/90"
                            >
                                Board
                            </Link>

                            <Link
                                to="/archive"
                                className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Archive
                            </Link>
                        </nav>
                    </div>

                    {/* Task Summary */}
                    <div className="mt-7 grid grid-cols-1 gap-3 border-t border-white/15 pt-6 sm:grid-cols-3">
                        <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                            <p className="text-xs font-medium text-white/70">
                                Total Active Tasks
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                {tasks.length}
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                            <p className="text-xs font-medium text-white/70">
                                In Progress
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                {tasks.filter((task) => task.status === "in-progress").length}
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                            <p className="text-xs font-medium text-white/70">
                                Completed
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                {tasks.filter((task) => task.status === "done").length}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Add Task Section */}
                <section aria-label="Create a task">
                    <AddTaskForm onAdd={onAdd} />
                </section>

                {/* Search and Filter */}
                <section className="overflow-hidden rounded-2xl border border-[#172B4D]/15 bg-white shadow-sm">
                    <div className="border-b border-[#172B4D]/10 px-5 py-4 sm:px-6">
                        <h2 className="text-base font-bold text-[#172B4D]">
                            Find Your Tasks
                        </h2>
                        <p className="mt-1 text-sm text-[#172B4D]/60">
                            Search your tasks or narrow them down by priority.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-[1fr_240px] md:items-end sm:p-6">
                        <div className="min-w-0">
                            <label
                                htmlFor="task-search"
                                className="mb-2 block text-sm font-semibold text-[#172B4D]"
                            >
                                Search Tasks
                            </label>

                            <input
                                id="task-search"
                                type="text"
                                placeholder="Search by title or description..."
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                className="w-full rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition placeholder:text-[#172B4D]/45 hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
                            />
                        </div>

                        <div className="min-w-0">
                            <label
                                htmlFor="priority-filter"
                                className="mb-2 block text-sm font-semibold text-[#172B4D]"
                            >
                                Filter by Priority
                            </label>

                            <select
                                id="priority-filter"
                                value={priorityFilter}
                                onChange={(event) => setPriorityFilter(event.target.value)}
                                className="w-full rounded-xl border border-[#172B4D]/20 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
                            >
                                <option value="All">All Priorities</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Kanban Board */}
                <section aria-label="Kanban task board">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-[#172B4D]">
                                Your Workflow
                            </h2>
                            <p className="mt-1 text-sm text-[#172B4D]/60">
                                Manage tasks across their current stages.
                            </p>
                        </div>

                        <p className="text-sm font-semibold text-[#172B4D]/70">
                            {filteredTasks.length} {filteredTasks.length === 1 ? "task" : "tasks"} displayed
                        </p>
                    </div>

                    <div className="kanban-board grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
                        <Column
                            title="To Do"
                            tasks={todoTasks}
                            onDelete={onDelete}
                            onMove={onMove}
                        />

                        <Column
                            title="In Progress"
                            tasks={inProgressTasks}
                            onDelete={onDelete}
                            onMove={onMove}
                        />

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
