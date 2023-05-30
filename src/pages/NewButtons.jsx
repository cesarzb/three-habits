import NewSleep from "../actions/NewSleep";
import NewHydration from "../actions/NewHydration";
import NewActivity from "../actions/NewActivity";

const NewButtons = ({ fetchDays, hydration, sleep }) => {
	return (
		<div className="new-habit-buttons">
			{<NewActivity fetchDays={fetchDays} />}
			{sleep && <NewSleep fetchDays={fetchDays} />}
			{hydration && <NewHydration fetchDays={fetchDays} />}
		</div>
	);
};

export default NewButtons;
