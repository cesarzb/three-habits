import { useAuthHeader } from "react-auth-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../constants";

const DeleteHabit = ({ habitId, fetchDay, plural }) => {
  const authHeader = useAuthHeader();

  const handleSubmit = () => {
    fetch(`${API_URL}/api/v1/${plural}/${habitId}`, {
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
      <FontAwesomeIcon icon={faX} />
    </button>
  );
};

export default DeleteHabit;
