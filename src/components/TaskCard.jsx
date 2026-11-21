
import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onMove }) {
  const priorityStyles = {
    High: "bg-[#FFE2E0] text-[#AE2E24]",
    Medium: "bg-[#FFF3C9] text-[#974F0C]",
    Low: "bg-[#DCFCE7] text-[#216E4E]",
  };

  return (
    <article className="task-card w-full min-w-0 max-w-full overflow-hidden rounded-md border border-[#DFE1E6] bg-white p-1.5 shadow-sm transition hover:border-[#B3B9C4] hover:shadow-md sm:p-3">

      {/* Task Title */}
      <div className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:justify-between sm:gap-2">
        <h3 className="w-full min-w-0 break-words text-[10px] font-semibold leading-4 text-[#172B4D] sm:flex-1 sm:text-sm sm:leading-5">
          {task.title}
        </h3>

        <span
          className={`max-w-full break-words rounded-sm px-1 py-0.5 text-[9px] font-bold sm:shrink-0 sm:px-2 sm:py-1 sm:text-[10px] ${priorityStyles[task.priority] ||
            "bg-[#F1F2F4] text-[#44546F]"
            }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Description */}
      {task.description && (
        <p className="mt-1 break-words text-[9px] leading-3 text-[#44546F] sm:mt-2 sm:text-xs sm:leading-5">
          {task.description}
        </p>
      )}

      {/* Created Date */}
      <p className="mt-2 break-words text-[9px] leading-3 text-[#8590A2] sm:mt-3 sm:text-[11px] sm:leading-normal">
        {task.createdAt}
      </p>

      {/* Actions */}
      <div className="mt-2 flex min-w-0 flex-col items-start gap-1 border-t border-[#F1F2F4] pt-2 sm:mt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 sm:pt-3">
        <Link
          to={`/task/${task.id}`}
          className="max-w-full break-words rounded px-1 py-1 text-[9px] font-semibold text-[#0C66E4] transition hover:bg-[#DEEBFF] sm:px-3 sm:py-1.5 sm:text-xs"
        >
          View Details
        </Link>

        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="max-w-full break-words rounded px-1 py-1 text-[9px] font-semibold text-[#44546F] transition hover:bg-[#F1F2F4] hover:text-[#AE2E24] sm:px-3 sm:py-1.5 sm:text-xs"
          >
            Delete
          </button>
        )}
      </div>

      {/* Status Control */}
      <div className="mt-2 min-w-0">
        <label
          htmlFor={`status-${task.id}`}
          className="mb-1 block break-words text-[9px] font-semibold leading-3 text-[#44546F] sm:mb-1.5 sm:text-[11px] sm:leading-normal"
        >
          Status
        </label>

        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={(event) =>
            onMove(task.id, event.target.value)
          }
          className="block w-full min-w-0 max-w-full rounded border border-[#DFE1E6] bg-white px-0.5 py-1 text-[9px] text-[#172B4D] outline-none focus:border-[#0C66E4] focus:ring-2 focus:ring-[#0C66E4]/10 sm:px-2 sm:py-2 sm:text-xs"
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
