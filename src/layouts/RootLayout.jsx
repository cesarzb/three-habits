import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className="root-layout">
			<header>
				<nav>
					<h1>3Habits</h1>
					<NavLink to="/">Days</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
