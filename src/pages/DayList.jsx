import { Link } from "react-router-dom";
import useFormattedDate from "../hooks/useFormattedDate";

const DayList = (days) => {
	return (
		<div className="day-list">
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
