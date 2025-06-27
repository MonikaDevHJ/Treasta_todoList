# 📋 Task Manager - Tresata Frontend Assessment

This is a task management web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It allows users to create, edit, delete, and track the status of tasks. The UI is based on the given Figma design and provides a smooth and responsive experience.

## ✅ Features

- 📝 Add New Task (Title, Description, Status)
- ✏️ Edit Existing Task
- ✅ Mark as Completed / In Progress / Pending
- 🗑️ Delete Task
- 🔍 Filter tasks by status
- 🔄 Task data persists using `useReducer` + global context
- 💾 LocalStorage support (coming soon)
- 🎨 Clean UI with Tailwind CSS and smooth UX

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React Context + useReducer for state management
- [UUID](https://www.npmjs.com/package/uuid) for unique task IDs

## 📂 Folder Structure (important files)

﻿/app
page.tsx → Home page
/_components
Header.tsx
Layout.tsx
/src
/component
AddTaskForm.tsx
FloatingButton.tsx
... (more coming)
/context
TaskContext.tsx → Global state using useReducer
/types
Task.ts → Task model/type


## 🚀 Getting Started

```bash
# Clone the project
git clone https://github.com/your-username/tresata-task-manager.git

cd tresata-task-manager

# Install dependencies
npm install

# Run the development server
npm run dev

