import { useAuthHeader } from "react-auth-kit";

const DeleteActivity = ({ activityId, fetchDay }) => {
	const authHeader = useAuthHeader();

	const handleSubmit = () => {
		fetch("http://localhost:3000/api/v1/activities/" + activityId, {
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

export default DeleteActivity;
