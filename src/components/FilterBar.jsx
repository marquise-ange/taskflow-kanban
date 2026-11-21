
function FilterBar({
    searchQuery,
    onSearchChange,
    priorityFilter,
    onPriorityChange,
}) {
    return (
        <section className="flex flex-col gap-3 rounded-lg border border-[#DFE1E6] bg-white p-3 sm:flex-row sm:items-center">

            {/* Search Input */}
            <div className="min-w-0 flex-1">
                <label htmlFor="task-search" className="sr-only">
                    Search tasks
                </label>

                <input
                    id="task-search"
                    type="search"
                    placeholder="Search tasks by title or description..."
                    value={searchQuery}
                    onChange={(event) => onSearchChange(event.target.value)}
                    className="w-full rounded border border-[#DFE1E6] bg-white px-3 py-2 text-sm text-[#172B4D] outline-none placeholder:text-[#8590A2] focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
                />
            </div>

            {/* Priority Filter */}
            <div className="flex items-center gap-2 sm:w-56">
                <label
                    htmlFor="priority-filter"
                    className="shrink-0 text-xs font-semibold text-[#626F86]"
                >
                    Priority:
                </label>

                <select
                    id="priority-filter"
                    value={priorityFilter}
                    onChange={(event) => onPriorityChange(event.target.value)}
                    className="min-w-0 rounded border border-[#DFE1E6] bg-white px-3 py-2 text-sm text-[#172B4D] outline-none focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
                >
                    <option value="All">All priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </section>
    );
}

export default FilterBar;
