import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";
const NewSleep = ({ fetchDays }) => {
	const authHeader = useAuthHeader();
	const [length, setLength] = useState("8:15");

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/api/v1/sleeps", {
			method: "POST",
			headers: {
				Authorization: authHeader(),
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ sleep: { length: length } }),
		}).then(() => {
			fetchDays();
		});
	};

	return (
		<form className="new-form">
			<div className="form-value">
				<label className="form-label" htmlFor="sleep-length">
					Length
				</label>
				<input
					className="form-input"
					type="text"
					id="sleep-length"
					name="length"
					value={length}
					onChange={(e) => {
						setLength(e.target.value);
					}}
				/>
			</div>
			<button className="create-habit" onClick={handleSubmit}>
				Add sleep
			</button>
		</form>
	);
};

export default NewSleep;
