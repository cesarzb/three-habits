import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";

const NewHabit = ({ fetchDays, singular, plural, attrDefault, attrName }) => {
	const authHeader = useAuthHeader();
	const [attr, setAttr] = useState(attrDefault);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`http://localhost:3000/api/v1/${plural}`, {
			method: "POST",
			headers: {
				Authorization: authHeader(),
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ [singular]: { [attrName]: `${attr}` } }),
		}).then(() => {
			fetchDays();
		});
	};

	const capitalize = (str) => {
		return str.split("")[0].toUpperCase() + str.slice(1, str.length);
	};

	return (
		<form className="new-form">
			<div className="form-value">
				<label className="form-label" htmlFor={`${singular}-${attrName}`}>
					{capitalize(attrName)}
				</label>
				<input
					className="form-input"
					type="text"
					id={`${singular}-${attrName}`}
					name={attrName}
					value={attr}
					onChange={(e) => {
						setAttr(e.target.value);
					}}
				/>
			</div>
			<button className="create-habit" onClick={handleSubmit}>
				Add
			</button>
		</form>
	);
};

export default NewHabit;
