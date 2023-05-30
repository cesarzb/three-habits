import DeleteHydration from "../actions/DeleteHydration";

const HydrationDetails = ({ hydration, fetchDay }) => {
	return (
		<div className="hydration-info">
			<h3>Hydration</h3>
			<br />
			<p>Cups: {hydration.cups}</p>
			<DeleteHydration hydrationId={hydration.id} fetchDay={fetchDay} />
		</div>
	);
};

export default HydrationDetails;
