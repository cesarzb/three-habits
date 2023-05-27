import { Link } from "react-router-dom";
import useFormattedDate from "../hooks/useFormattedDate";
import NewSleep from "../actions/NewSleep";
import NewHydration from "../actions/NewHydration";
const DayList = (days) => {
	return (
		<div className="day-list">
			{/* <NewDay /> */}
			<div className="new-habit-buttons">
				<NewSleep />
				<NewHydration />
			</div>
			{days["days"].map((day) => (
				<Link to={`/days/${day.id}`} key={day.id}>
					<div className="day-tile">
						<h2 className="day-date">{useFormattedDate(day.date)}</h2>
					</div>
				</Link>
			))}
		</div>
	);
};

export default DayList;
