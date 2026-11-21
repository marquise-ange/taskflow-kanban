
import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onMove }) {
  const priorityStyles = {
    High: "bg-[#FFE2E0] text-[#AE2E24]",
    Medium: "bg-[#FFF3C9] text-[#974F0C]",
    Low: "bg-[#DCFCE7] text-[#216E4E]",
  };

  return (
    <article className="task-card min-w-0 rounded-md border border-[#DFE1E6] bg-white p-3 shadow-sm transition hover:border-[#B3B9C4] hover:shadow-md">

      {/* Task Title */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="min-w-0 break-words text-sm font-semibold leading-5 text-[#172B4D]">
          {task.title}
        </h3>

        <span
          className={`shrink-0 rounded-sm px-2 py-1 text-[10px] font-bold ${priorityStyles[task.priority] || "bg-[#F1F2F4] text-[#44546F]"
            }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Description */}
      {task.description && (
        <p className="mt-2 break-words text-xs leading-5 text-[#44546F]">
          {task.description}
        </p>
      )}

      {/* Created Date */}
      <p className="mt-3 text-[11px] text-[#8590A2]">
        Created: {task.createdAt}
      </p>

      {/* Actions */}
      <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-[#F1F2F4] pt-3">
        <Link
          to={`/task/${task.id}`}
          className="rounded px-3 py-1.5 text-xs font-semibold text-[#0C66E4] transition hover:bg-[#DEEBFF]"
        >
          View Details
        </Link>

        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="rounded px-3 py-1.5 text-xs font-semibold text-[#44546F] transition hover:bg-[#F1F2F4] hover:text-[#AE2E24]"
          >
            Delete
          </button>
        )}
      </div>

      {/* Status Control */}
      <div className="mt-2">
        <label
          htmlFor={`status-${task.id}`}
          className="mb-1.5 block text-[11px] font-semibold text-[#44546F]"
        >
          Change Status
        </label>

        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={(event) => onMove(task.id, event.target.value)}
          className="w-full rounded border border-[#DFE1E6] bg-white px-2 py-2 text-xs text-[#172B4D] outline-none focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10"
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
