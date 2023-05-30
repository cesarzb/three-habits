import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";
const NewActivity = ({ fetchDays }) => {
	const authHeader = useAuthHeader();
	const [date, setDate] = useState("8:15");

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/api/v1/activities", {
			method: "POST",
			headers: {
				Authorization: authHeader(),
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ activity: { date: date } }),
		}).then(() => {
			fetchDays();
		});
	};

	return (
		<form className="new-form">
			<div className="form-value">
				<label className="activity-date" htmlFor="activity-date">
					Time of activity
				</label>
				<input
					className="activity-form-date"
					type="text"
					id="activity-date"
					name="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</div>
			<button className="create-activity" onClick={handleSubmit}>
				Add activity
			</button>
		</form>
	);
};

export default NewActivity;
