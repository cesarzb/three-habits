import UpdateHydration from "../actions/UpdateHydration";
import NewHabit from "../actions/NewHabit";

const NewButtons = ({ fetchDays, hydration, sleep }) => {
	return (
		<div className="new-habit-buttons">
			{
				<NewHabit
					fetchDays={fetchDays}
					singular={"activity"}
					plural={"activities"}
					attrDefault={"12:00"}
					attrName={"date"}
				/>
			}
			{!sleep && (
				<NewHabit
					fetchDays={fetchDays}
					singular={"sleep"}
					plural={"sleeps"}
					attrDefault={"8:00"}
					attrName={"length"}
				/>
			)}
			{hydration ? (
				<UpdateHydration fetchDays={fetchDays} hydrationId={hydration.id} />
			) : (
				<NewHabit
					fetchDays={fetchDays}
					singular={"hydration"}
					plural={"hydrations"}
					attrDefault={8}
					attrName={"cups"}
				/>
			)}
		</div>
	);
};

export default NewButtons;
