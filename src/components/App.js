import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTile from "./HogTile";

function App() {
	const[hoglist, setHoglist] = React.useState(hogs);
	return (
		<div className="App">
			<Nav />
		<div className="ui grid container">{
				hoglist.map((hog) => {
					return <HogTile key={hog.name} hog={hog} />;
				})
			}</div>
			</div>
	);
}

export default App;
