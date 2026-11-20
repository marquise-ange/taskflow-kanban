
import TaskCard from "./TaskCard";

function Column({ title, tasks, onDelete, onMove }) {
    return (
        <section className="kanban-column">
            <div className="column-header">
                <h2>{title}</h2>
                <span className="task-count">{tasks.length}</span>
            </div>

            <div className="column-tasks">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onMove={onMove}
                        />
                    ))
                ) : (
                    <p className="empty-message">No tasks available.</p>
                )}
            </div>
        </section>
    );
}

export default Column;
