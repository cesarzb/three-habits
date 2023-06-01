import { NavLink } from "react-router-dom";
import Logout from "../pages/authentication/Logout";
import { useIsAuthenticated } from "react-auth-kit";

const Navbar = () => {
	const isAuthenticated = useIsAuthenticated();
	return (
		<nav className="navbar">
			<div className="logo">
				<NavLink className="nav-button" to="/">
					<h2>3Habits</h2>
				</NavLink>
			</div>
			<div className="nav-buttons">
				{/* <NavLink className="nav-button" to="/">
					Days
				</NavLink> */}
				<div className="nav-button">{isAuthenticated() && <Logout />}</div>
			</div>
		</nav>
	);
};

export default Navbar;
