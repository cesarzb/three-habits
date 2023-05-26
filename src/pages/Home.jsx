import { useAuthHeader } from "react-auth-kit";
import useFetch from "../hooks/useFetch";
import DayList from "./DayList";

const Home = () => {
	const authHeader = useAuthHeader();
	const {
		data: days,
		isPending,
		error,
	} = useFetch("http://localhost:3000/api/v1/days", {
		headers: {
			Authorization: authHeader(),
		},
	});
	return (
		<div className="home">
			{isPending && <div>Loading...</div>}
			{error && <div>An error occured: {error}</div>}
			{days && <DayList days={days} />}
		</div>
	);
};

export default Home;
