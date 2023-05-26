import { useNavigate } from "react-router-dom";
import { useAuthHeader, useSignOut } from "react-auth-kit";

const Logout = () => {
	const navigate = useNavigate();
	const authHeader = useAuthHeader();
	const signOut = useSignOut();

	const handleSubmit = () => {
		fetch("http://localhost:3000/users/sign_out", {
			method: "DELETE",
			headers: {
				Authorization: authHeader(),
			},
		}).then(() => {
			signOut();
			navigate("/");
		});
	};

	return (
		<button className="logout-button" onClick={handleSubmit}>
			Log out
		</button>
	);
};

export default Logout;
