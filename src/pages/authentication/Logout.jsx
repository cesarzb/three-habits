import { useNavigate } from "react-router-dom";
import { useAuthHeader, useSignOut } from "react-auth-kit";
import { API_URL } from "../../constants";

const Logout = () => {
  const navigate = useNavigate();
  const authHeader = useAuthHeader();
  const signOut = useSignOut();

  const handleSubmit = () => {
    fetch(`${API_URL}/users/sign_out`, {
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
