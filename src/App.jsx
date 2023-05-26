import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";
// pages
import Home from "./pages/Home";
import Login from "./pages/authentication/Login";

// layouts
import RootLayout from "./layouts/RootLayout";
import DayDetails from "./pages/DayDetails";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route
					index
					element={
						<RequireAuth loginPath={"/login"}>
							<Home />
						</RequireAuth>
					}
				/>
				<Route
					path="/days/:id"
					element={
						<RequireAuth loginPath={"/login"}>
							<DayDetails />
						</RequireAuth>
					}
				/>

				<Route path="login" element={<Login />} />
			</Route>
		)
	);

	return (
		<>
			<AuthProvider
				authType={"cookie"}
				authName={"_auth"}
				cookieDomain={window.location.hostname}
				cookieSecure={window.location.protocol === "https:"}
			>
				<RouterProvider router={router} />
			</AuthProvider>
		</>
	);
}

export default App;
