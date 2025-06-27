# 📋 Task Manager - Tresata Frontend Assessment

This is a **tresta_TodoList** built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** as part of the Frontend Engineer assessment for **Tresata India**.

It allows users to manage tasks with full CRUD functionality, filter them by status, and persists data using localStorage.



## 🔗 Live Demo

👉 [View Deployed App]()  


## ✅ Features

- 📝 Add New Task (Title, Description, Status)
- ✏️ Edit Existing Task
- ✅ Mark as Completed / In Progress / Pending
- 🗑️ Delete Task
- 🔍 Filter Tasks by Status: `All`, `Pending`, `In Progress`, `Completed`
- 💾 **Persist Tasks using localStorage**
- ⚙️ Global State Management using `useReducer` + `useContext`
- 🎨 Clean UI with Tailwind CSS
- ⚡ Responsive and accessible design

---

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React + TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [UUID](https://www.npmjs.com/package/uuid) – For unique task IDs
- State: `useReducer` + `useContext` + `localStorage`

---

## 📂 Folder Structure
📁 /app
└── page.tsx # Home page with filter logic and form toggle

📁 /src
├── component/ # Reusable UI components
│ ├── Header.tsx
│ ├── AddTaskForm.tsx
│ ├── FloatingButton.tsx
│ └── TaskList.tsx

├── context/
│ └── TaskContext.tsx # Global state management using Context + useReducer

├── types/
│ └── Task.ts # Task model/interface
