import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";

// pages
import DaysList from "./pages/DaysList";

// layouts
import RootLayout from "./layouts/RootLayout";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<DaysList />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
