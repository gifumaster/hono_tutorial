import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const [count, setCount] = useState(0);

	return (
		<div className="card bg-red-100">
			<Button type="button" onClick={() => setCount((count) => count + 1)}>
				up
			</Button>
			<Button
				type="button"
				className="bg-red-100"
				onClick={() => setCount((count) => count - 1)}
			>
				down
			</Button>
			{count}
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
		</div>
	);
}
