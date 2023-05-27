import { useAuthHeader } from "react-auth-kit";

const NewDay = () => {
	const authHeader = useAuthHeader();

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/api/v1/days", {
			method: "POST",
			headers: {
				Authorization: authHeader(),
			},
		}).then(() => {
			console.log("Zadzialalo!");
		});
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
