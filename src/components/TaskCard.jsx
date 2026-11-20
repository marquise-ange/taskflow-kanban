
import { Link } from "react-router-dom";

function TaskCard({ task, onDelete }) {
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
    </article>
  );
}

export default TaskCard;
