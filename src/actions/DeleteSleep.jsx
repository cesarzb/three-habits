import { useAuthHeader } from "react-auth-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const DeleteSleep = ({ sleepId, fetchDay }) => {
	const authHeader = useAuthHeader();

	const handleSubmit = () => {
		fetch("http://localhost:3000/api/v1/sleeps/" + sleepId, {
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
			{/* X */}
			<FontAwesomeIcon icon={faX} />
		</button>
	);
};

export default DeleteSleep;
