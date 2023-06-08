import DeleteHabit from "../actions/DeleteHabit";
const HydrationDetails = ({ hydration, fetchDay }) => {
	return (
		<div className="habit-info">
			<h3>Hydration</h3>
			<div className="habit-event">
				<p>Cups: {hydration.cups}</p>
				<DeleteHabit
					habitId={hydration.id}
					fetchDay={fetchDay}
					plural={"hydrations"}
				/>
			</div>
		</div>
	);
};

export default HydrationDetails;
