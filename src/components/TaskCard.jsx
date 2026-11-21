
import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onMove }) {
  return (
    <article className="task-card min-w-0 overflow-hidden rounded-xl border border-[#172B4D]/15 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[#172B4D]/30 hover:shadow-[0_8px_24px_rgba(23,43,77,0.08)]">

      {/* Task Information */}
      <div className="p-4">

        {/* Title and Priority */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 break-words text-base font-bold leading-6 text-[#172B4D]">
            {task.title}
          </h3>

          <span className="shrink-0 rounded-lg border border-[#172B4D]/20 bg-white px-2.5 py-1 text-xs font-semibold text-[#172B4D]">
            {task.priority}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 break-words text-sm leading-6 text-[#172B4D]/70">
          {task.description}
        </p>

        {/* Created Date */}
        <div className="mt-4 flex items-center gap-2 text-xs text-[#172B4D]/60">
          <span className="font-semibold">Created:</span>
          <span>{task.createdAt}</span>
        </div>
      </div>

      {/* Task Actions */}
      <div className="flex flex-wrap items-center gap-2 border-t border-[#172B4D]/10 px-4 py-3">
        <Link
          to={`/task/${task.id}`}
          className="inline-flex items-center justify-center rounded-lg bg-[#172B4D] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#243D64] focus:outline-none focus:ring-2 focus:ring-[#172B4D]/30"
        >
          View Details
        </Link>

        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="inline-flex items-center justify-center rounded-lg border border-[#172B4D]/20 bg-white px-3 py-2 text-xs font-semibold text-[#172B4D] transition hover:bg-[#172B4D] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#172B4D]/20"
          >
            Delete
          </button>
        )}
      </div>

      {/* Status Control */}
      <div className="border-t border-[#172B4D]/10 bg-white px-4 py-3">
        <label
          htmlFor={`status-${task.id}`}
          className="mb-2 block text-xs font-semibold text-[#172B4D]"
        >
          Change Status
        </label>

        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={(event) => onMove(task.id, event.target.value)}
          className="w-full rounded-lg border border-[#172B4D]/20 bg-white px-3 py-2.5 text-sm text-[#172B4D] outline-none transition hover:border-[#172B4D]/40 focus:border-[#172B4D] focus:ring-2 focus:ring-[#172B4D]/10"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </article>
  );
}

export default TaskCard;
