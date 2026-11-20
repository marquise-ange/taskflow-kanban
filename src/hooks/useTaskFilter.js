
import { useMemo } from "react";

function useTaskFilter(tasks, searchQuery, priorityFilter) {
    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesSearch =
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesPriority =
                priorityFilter === "All" ||
                task.priority === priorityFilter;

            return matchesSearch && matchesPriority;
        });
    }, [tasks, searchQuery, priorityFilter]);

    return filteredTasks;
}

export default useTaskFilter;
