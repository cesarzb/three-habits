import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";

const UpdateHydration = ({ fetchDays, hydrationId }) => {
	// /api/v1/hydrations/{id}
	const authHeader = useAuthHeader();
	const [cups, setCups] = useState(8);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/api/v1/hydrations/" + hydrationId, {
			method: "PATCH",
			headers: {
				Authorization: authHeader(),
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ cups: cups }),
		}).then(() => {
			fetchDays();
		});
	};

	return (
		<form className="new-form">
			<div className="form-value">
				<label className="form-label" htmlFor="hydration-cups">
					Cups
				</label>
				<input
					className="form-input"
					type="text"
					id="hydration-cups"
					name="cups"
					value={cups}
					onChange={(e) => {
						if (/^[1-9][0-9]*$/.test(e.target.value) || e.target.value == "") {
							setCups(e.target.value);
						} else {
							e.preventDefault();
						}
					}}
				/>
			</div>
			<button className="create-habit" onClick={handleSubmit}>
				Update
			</button>
		</form>
	);
};

export default UpdateHydration;
