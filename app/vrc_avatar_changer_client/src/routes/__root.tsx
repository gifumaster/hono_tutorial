import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Avatar
				</Link>{" "}
				<Link to="/settings" className="[&.active]:font-bold">
					Settings
				</Link>{" "}
				<Link to="/login" className="[&.active]:font-bold">
					Login
				</Link>
			</div>
			<hr />
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	),
});
