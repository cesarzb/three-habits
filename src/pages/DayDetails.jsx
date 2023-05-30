import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormattedDate from "../hooks/useFormattedDate";
import SleepDetails from "./SleepDetails";
import HydrationDetails from "./HydrationDetails";
import ActivitiesDetails from "./ActivitiesDetails";
import { useEffect, useState } from "react";

const DayDetails = () => {
	const authHeader = useAuthHeader();
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);

	const fetchDay = () => {
		fetch("http://localhost:3000/api/v1/days/" + id, {
			headers: {
				Authorization: authHeader(),
			},
		})
			.then((res) => {
				if (!res.ok) {
					throw Error("Resource could not be fetched");
				}
				return res.json();
			})
			.then((data) => {
				setError(null);
				setData(data);

				setIsPending(false);
			})
			.catch((err) => {
				setIsPending(false);
				setError(err);
			});
	};

	useEffect(() => {
		fetchDay();
	}, []);

	return (
		<div className="home">
			{isPending && <div>Loading...</div>}
			{error && <div>An error occured: {error}</div>}
			{data && (
				<div className="day-info">
					<h2 className="date">{useFormattedDate(data["day"].date)}</h2>
					<div className="day-habits">
						<p>Attended habits</p>
						{data["sleep"] && (
							<SleepDetails sleep={data["sleep"]} fetchDay={fetchDay} />
						)}
						{data["hydration"] && (
							<HydrationDetails
								hydration={data["hydration"]}
								fetchDay={fetchDay}
							/>
						)}
						{data["activities"].length !== 0 && (
							<ActivitiesDetails
								activities={data["activities"]}
								fetchDay={fetchDay}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default DayDetails;
