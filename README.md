# TaskFlow – React Kanban Task Board

TaskFlow is a responsive Kanban task management application built with React. It allows users to organize, manage, track, and filter tasks across different workflow stages.

This project was developed to demonstrate core React concepts, including **lifting state up, prop drilling, custom hooks, component reusability, and client-side routing**, without using the React Context API or external state management libraries.

## Features

- **Task Management:** Create, edit, and delete tasks.
- **Kanban Board:** Organize tasks into three columns:
  - To Do
  - In Progress
  - Done
- **Task Details:** View and update task titles, descriptions, statuses, and priorities.
- **Priority Management:** Assign High, Medium, or Low priority to tasks.
- **Search and Filtering:** Search tasks by title or description and filter by priority.
- **Archive and Restore:** Archive tasks and restore them whenever needed.
- **Local Storage Persistence:** Automatically save task changes in the browser so data remains available after refreshing.
- **Simulated Loading:** Display a loading screen for 400ms when initializing an empty board.
- **Client-Side Routing:** Navigate between the board, task details, and archive pages.
- **Responsive Design:** Designed to work across different screen sizes.

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- React Router DOM
- Tailwind CSS
- Browser Local Storage
- HTML5

## Project Structure

```text
src/
├── data/
│   └── initialTasks.js
├── hooks/
│   ├── useLocalStorage.js
│   └── useTaskFilter.js
├── components/
│   ├── Column.jsx
│   ├── TaskCard.jsx
│   ├── FilterBar.jsx
│   ├── AddTaskForm.jsx
│   └── Footer.jsx
├── pages/
│   ├── BoardPage.jsx
│   ├── TaskDetailPage.jsx
│   └── ArchivePage.jsx
├── App.jsx
└── main.jsx
```

## React Concepts Demonstrated

### 1. Lifting State Up

The main tasks state and task management functions are maintained in the top-level `App.jsx` component.

### 2. Prop Drilling

Data and callback functions are passed through components using props, allowing child components to interact with the application state without Context API.

### 3. Custom Hooks

Two custom hooks are implemented:

- `useLocalStorage`: Synchronizes task state with browser Local Storage.
- `useTaskFilter`: Filters tasks according to search text and priority.

### 4. React Router

React Router DOM handles navigation between:

- `/` – Main Kanban Board
- `/task/:id` – Task Details
- `/archive` – Archived Tasks

## Getting Started

Follow these steps to run TaskFlow locally.

### Prerequisites

Make sure you have Node.js and npm installed.

### 1. Clone the Repository

```bash
git clone https://github.com/marquise-ange/taskflow-kanban.git

```

### 2. Navigate to the Project Directory

```bash
cd taskflow-kanban
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access TaskFlow.

## Data Persistence

TaskFlow uses the browser's Local Storage to preserve tasks and their changes.

The application stores the board data under the following key:

```text
taskflow-tasks
```

This allows tasks to remain available when the user refreshes the browser.

**Note:** Task data is stored locally in the browser and is not synchronized across devices.

## State Management

This project intentionally uses React's built-in state management approach.

- No React Context API.
- No Redux.
- No Zustand.
- No external state management libraries.

All global task state is managed in `App.jsx` and shared through props.

## Live Demo

**Live Application:** https://taskflow-kanban-lake.vercel.app/

## GitHub Repository

**Source Code:**  https://github.com/marquise-ange/taskflow-kanban.git

