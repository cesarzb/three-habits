import DeleteHydration from "../actions/DeleteHydration";

const HydrationDetails = ({ hydration, fetchDay }) => {
	return (
		<div className="habit-info">
			<h3>Hydration</h3>
			<div className="habit-event">
				<p>Cups: {hydration.cups}</p>
				<DeleteHydration hydrationId={hydration.id} fetchDay={fetchDay} />
			</div>
		</div>
	);
};

export default HydrationDetails;
