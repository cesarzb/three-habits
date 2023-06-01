import NewSleep from "../actions/NewSleep";
import NewHydration from "../actions/NewHydration";
import NewActivity from "../actions/NewActivity";
import UpdateHydration from "../actions/UpdateHydration";

const NewButtons = ({ fetchDays, hydration, sleep }) => {
	return (
		<div className="new-habit-buttons">
			{<NewActivity fetchDays={fetchDays} />}
			{!sleep && <NewSleep fetchDays={fetchDays} />}
			{hydration ? (
				<UpdateHydration fetchDays={fetchDays} hydrationId={hydration.id} />
			) : (
				<NewHydration fetchDays={fetchDays} />
			)}
		</div>
	);
};

export default NewButtons;
