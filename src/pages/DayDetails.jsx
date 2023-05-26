import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormattedDate from "../hooks/useFormattedDate";

const DayDetails = () => {
	const authHeader = useAuthHeader();
	const { id } = useParams();

	const { data, isPending, error } = useFetch(
		"http://localhost:3000/api/v1/days/" + id,
		{
			headers: {
				Authorization: authHeader(),
			},
		}
	);

	return (
		<div className="home">
			{isPending && <div>Loading...</div>}
			{error && <div>An error occured: {error}</div>}
			{data && (
				<div className="day-info">
					<h2 className="date">{useFormattedDate(data["day"].date)}</h2>
					<div className="day-habits">
						<p>Attended habits</p>
						{data["activities"] && <div className="activities info"></div>}
						{data["sleep"] && (
							<div className="sleep-info">
								<h3>Sleep</h3>
								<p>Length: {data["sleep"].length}</p>
							</div>
						)}
						{data["hydration"] && (
							<div className="hydration-info">
								<h3>Hydration</h3>
								<p>Cups: {data["hydration"].cups}</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default DayDetails;
