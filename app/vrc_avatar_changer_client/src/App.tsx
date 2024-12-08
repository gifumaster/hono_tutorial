import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card bg-red-100">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					up
				</button>
				<button
					type="button"
					className="bg-red-100"
					onClick={() => setCount((count) => count - 1)}
				>
					down
				</button>
				{count}
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</>
	);
}

export default App;