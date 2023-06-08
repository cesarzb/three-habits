import DeleteHabit from "../actions/DeleteHabit";

const SleepDetails = ({ sleep, fetchDay }) => {
	const sleepLength = (length) => {
		const date = new Date(length);

		const hours = date.getUTCHours();
		const minutes = date.getUTCMinutes();

		const formattedString = `${hours}h ${minutes}min`;
		return formattedString;
	};

	return (
		<div className="habit-info">
			<h3>Sleep</h3>
			<div className="habit-event">
				<p>Length: {sleepLength(sleep.length)}</p>
				<DeleteHabit habitId={sleep.id} fetchDay={fetchDay} plural={"sleeps"} />
			</div>
		</div>
	);
};

export default SleepDetails;
