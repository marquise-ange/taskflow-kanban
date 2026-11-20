
import { Link } from "react-router-dom";

function ArchivePage({ tasks, onRestore }) {
    const archivedTasks = tasks.filter((task) => task.archived);

    return (
        <main className="archive-page">
            <Link to="/">← Back to Board</Link>

            <header>
                <h1>Archived Tasks</h1>
                <p>Review and restore your archived tasks.</p>
            </header>

            <section className="archive-list">
                {archivedTasks.length > 0 ? (
                    archivedTasks.map((task) => (
                        <article key={task.id} className="archive-card">
                            <div>
                                <h2>{task.title}</h2>
                                <p>{task.description}</p>
                                <span>Status: {task.status}</span>
                            </div>

                            <button
                                type="button"
                                onClick={() => onRestore(task.id)}
                            >
                                Restore Task
                            </button>
                        </article>
                    ))
                ) : (
                    <p>No archived tasks yet.</p>
                )}
            </section>
        </main>
    );
}

export default ArchivePage;
