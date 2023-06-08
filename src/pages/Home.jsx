import { useAuthHeader } from "react-auth-kit";
import DayList from "./DayList";
import { useState, useEffect } from "react";
import NewButtons from "./NewButtons";

const Home = () => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [hydration, setHydration] = useState(true);
	const [sleep, setSleep] = useState(true);
	const [buttonsPending, setButtonsPending] = useState(true);

	const authHeader = useAuthHeader();

	const fetchDays = () => {
		fetch("http://localhost:3000/api/v1/days", {
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
				setData(data);
				const lastDay = data[0]?.date ? new Date(data[0].date) : null;
				const today = new Date();
				if (monthAndDay(lastDay) === monthAndDay(today)) {
					fetchNewestDay(data[0].id);
				} else {
					setHydration(null);
					setSleep(null);
				}

				setButtonsPending(false);
				setIsPending(false);
			})
			.catch(() => {
				setIsPending(false);
			});
	};

	const monthAndDay = (date) => {
		return date ? date.getMonth() + "-" + date.getDate() : null;
	};

	const fetchNewestDay = (id) => {
		fetch("http://localhost:3000/api/v1/days/" + id, {
			headers: {
				Authorization: authHeader(),
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setHydration(data["hydration"]);
				setSleep(data["sleep"]);
			});
	};

	useEffect(() => {
		fetchDays();
	}, []);

	return (
		<div className="home">
			{isPending && <div>Loading...</div>}
			{data && (
				<>
					<NewButtons
						fetchDays={fetchDays}
						hydration={!buttonsPending && hydration}
						sleep={!buttonsPending && sleep}
					/>
					{/* <UpdateHydration fetchDays={fetchDays} /> */}
					<DayList days={data} fetchDays={fetchDays} />
				</>
			)}
		</div>
	);
};

export default Home;
