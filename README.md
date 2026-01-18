<div align="center">
	<h1> FlowBoard - Task Management Dashboard </h1>
</div>

## Overview 📋

FlowBoard is a modern Task Management Dashboard designed to help users efficiently manage tasks, track progress, and stay organized. It offers a clean, user-friendly interface with essential productivity tools.

## Snapshot 📸

![FlowBoard](https://github.com/user-attachments/assets/008f622e-63a9-405a-a08e-927cfd512203)

### Key Features
- Drag and drop task management
- Status tracking (TODO, IN_PROGRESS, COMPLETED)
- Real-time search functionality
- Dark/Light theme support
- Responsive design
- Local storage persistence
- Task details with deadlines and time tracking

### Design & Architecture
The application follows a component-based architecture using React, with:
- Component-based structure using TypeScript
- Context API for state management
- DnD-kit for drag-and-drop functionality
- Modular components with clear separation of concerns
- Responsive layouts using Tailwind CSS
- Theme switching with context-based management

### Core Components
- Task Columns for different status categories
- Interactive Task Cards with priority indicators
- Search functionality with real-time filtering
- Theme toggle for user preference
- Modal system for task operations (Add/Edit/Delete)


## Tech Stack ✨

- [React.js](https://reactjs.org/) - UI Library
  - Chosen for its component-based architecture and robust ecosystem
- [Typescript](https://www.typescriptlang.org/) - Type Safety
  - For enhanced development experience and code reliability
- [Tailwind CSS](https://tailwindcss.com/) - Styling and UI
  - Provides rapid UI development with a utility-first approach
- [@dnd-kit](https://dndkit.com/) - Drag and Drop
  - Modern drag-and-drop library for React
- [Vite](https://vitejs.dev/) - Build tool
  - Offers faster development experience and optimized builds
- [Vercel](https://vercel.com/) - Hosting and Deployment
  - Enables seamless deployment and excellent performance

## Installation & Setup 💻

Follow these steps to run FlowBoard on your local machine.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Clone this repository

```bash
git clone https://github.com/Pappyjay23/FlowBoard.git
```

### Navigate to the directory

```bash
cd FlowBoard
```

### Install Dependencies

```bash
npm install
```

### Run

Run the development server to view the app.

```bash
npm run dev
```

Now, you can navigate to http://localhost:5173/ to view the app.

### Build

```bash
npm run build
```

## Development Notes 📝
- The app uses React Context for global state management
- Task data persists in localStorage
- Separate contexts for tasks, modal, and theme management

## Credits ✍

Implementation by [@Pappyjay23](https://github.com/Pappyjay23)
