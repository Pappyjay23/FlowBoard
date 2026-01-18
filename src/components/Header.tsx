import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TaskContextUse } from "../context/TaskContext";
import { ThemeContextUse } from "../context/ThemeContext";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
	const { isLightMode } = ThemeContextUse();
	const [searchTerm, setSearchTerm] = useState("");
	const { searchTasks } = TaskContextUse();

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = e.target.value;
		setSearchTerm(newSearchTerm);
		searchTasks(newSearchTerm);
	};

	const date = new Intl.DateTimeFormat("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(new Date());

	return (
		<header className='border-0 border-gray-200 p-6 flex flex-col md:flex-row gap-3 justify-between items-center md:items-start lg:items-center'>
			<div className='flex flex-col items-center md:items-start gap-3'>
				{/* Logo */}
				<div className='flex items-center gap-1'>
					<img
						src={"/logo.png"}
						alt='Logo'
						className={`w-8 md:w-10 h-auto rounded-full shadow-lg ${isLightMode ? "" : "invert"} `}
					/>
					<span className='text-xl md:text-2xl font-bold tracking-tighter'>
						FlowBoard
					</span>
				</div>
				<h2 className='text-md md:text-xl lg:hidden font-semibold tracking-tighter'>
					Today: {date}
				</h2>
			</div>
			<h2 className='text-md md:text-xl hidden lg:block font-semibold tracking-tighter'>
				Today: {date}
			</h2>
			<div className='flex items-center space-x-4'>
				<div className='relative'>
					<BsSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
					<input
						type='text'
						placeholder='Search'
						value={searchTerm}
						onChange={handleSearch}
						className={`pl-10 pr-4 py-2 border border-gray-200 rounded-lg md:w-64 outline-none text-[80%] ${
							isLightMode ? "bg-white" : "bg-[#1E1E1E] text-white"
						}`}
					/>
				</div>
				<DarkModeToggle />
			</div>
		</header>
	);
};

export default Header;
