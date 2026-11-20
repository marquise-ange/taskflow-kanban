
import { Link } from "react-router-dom";

function TaskCard({ task, onDelete, onMove }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>

        <span
          className={`priority-badge priority-${task.priority.toLowerCase()}`}
        >
          {task.priority}
        </span>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-card-footer">
        <span className="task-date">
          Created: {task.createdAt}
        </span>

        <div className="task-actions">
          <Link to={`/task/${task.id}`} className="view-task-button">
            View Details
          </Link>

          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(task.id)}
              className="delete-task-button"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      <div className="task-status-control">
        <label htmlFor={`status-${task.id}`}>
          Change Status
        </label>

        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={(event) => onMove(task.id, event.target.value)}
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
