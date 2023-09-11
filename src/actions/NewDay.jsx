import { useAuthHeader } from "react-auth-kit";
import { API_URL } from "../constants";

const NewDay = () => {
  const authHeader = useAuthHeader();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/api/v1/days`, {
      method: "POST",
      headers: {
        Authorization: authHeader(),
      },
    }).then(() => {});
  };

  return (
    <form className="new-day-form">
      <button className="create-day" onClick={handleSubmit}>
        New day
      </button>
    </form>
  );
};

export default NewDay;
