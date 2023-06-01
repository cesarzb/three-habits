import { useAuthHeader } from "react-auth-kit";

const DeleteHydration = ({ hydrationId, fetchDay }) => {
	const authHeader = useAuthHeader();

	const handleSubmit = () => {
		fetch("http://localhost:3000/api/v1/hydrations/" + hydrationId, {
			method: "DELETE",
			headers: {
				Authorization: authHeader(),
			},
		}).then(() => {
			fetchDay();
		});
	};

	return (
		<button className="delete-habit-button" onClick={handleSubmit}>
			X
		</button>
	);
};

export default DeleteHydration;
