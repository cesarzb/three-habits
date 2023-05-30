import DeleteSleep from "../actions/DeleteSleep";

const SleepDetails = ({ sleep, fetchDay }) => {
	const sleepLength = (length) => {
		const date = new Date(length);

		const hours = date.getUTCHours();
		const minutes = date.getUTCMinutes();

		const formattedString = `${hours}h ${minutes}min`;
		return formattedString;
	};

	return (
		<div className="sleep-info">
			<h3>Sleep</h3>
			<p>Length: {sleepLength(sleep.length)}</p>
			<DeleteSleep sleepId={sleep.id} fetchDay={fetchDay} />
		</div>
	);
};

export default SleepDetails;
