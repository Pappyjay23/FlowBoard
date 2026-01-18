import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";
import Modal from "./components/Modal";
import TaskForm from "./components/TaskForm";
import { ModalContextUse, ModalProvider } from "./context/ModalContext";
import { TaskProvider } from "./context/TaskContext";
import { ThemeContextUse, ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function AppContent() {
	const {
		isAddModalOpen,
		closeAddModal,
		isEditModalOpen,
		closeEditModal,
		isDeleteModalOpen,
		selectedTask,
		modalStatus,
	} = ModalContextUse();

	const { isLightMode } = ThemeContextUse();

	return (
		<div
			className={`flex h-svh   ${
				isLightMode ? "bg-white" : "bg-[#1E1E1E] text-white"
			}`}>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>

			<Modal isOpen={isAddModalOpen} onClose={closeAddModal} title='Add Task'>
				<TaskForm
					onSubmit={closeAddModal}
					buttonText='Add Task'
					status={modalStatus || "TODO"}
				/>
			</Modal>

			<Modal
				isOpen={isEditModalOpen}
				onClose={closeEditModal}
				title='Edit Task'>
				{selectedTask && (
					<TaskForm
						initialData={selectedTask}
						onSubmit={closeEditModal}
						buttonText='Update'
						status={selectedTask.status}
					/>
				)}
			</Modal>

			{isDeleteModalOpen && <DeleteConfirmationModal />}
		</div>
	);
}

function App() {
	return (
		<Router>
			<ThemeProvider>
				<TaskProvider>
					<ModalProvider>
						<AppContent />
						<ToastContainer position='bottom-right' autoClose={3000} />
					</ModalProvider>
				</TaskProvider>
			</ThemeProvider>
		</Router>
	);
}

export default App;
