import { Link } from "react-router-dom";
import useFormattedDate from "../hooks/useFormattedDate";
import DeleteDay from "../actions/DeleteDay";

const DayList = ({ days, fetchDays }) => {
	return (
		<div className="day-list">
			{/* <NewDay /> */}
			{days.map((day) => (
				<div className="day-tile" key={day.id}>
					<Link to={`/days/${day.id}`}>
						<h2 className="day-date">{useFormattedDate(day.date)}</h2>
					</Link>
					<DeleteDay dayId={day.id} fetchDays={fetchDays} />
				</div>
			))}
		</div>
	);
};

export default DayList;
