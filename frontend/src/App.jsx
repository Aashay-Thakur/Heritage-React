import { Component } from "./components/components";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import "./App.scss";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

function App() {
	useEffect(() => {
		document.title = "Out Heritage | Our भारत";
		M.AutoInit();
	}, []);

	return (
		<>
			<Component.Nav />
			<div className="main">
				<div className="backdrop"></div>
				<Routes>
					<Route path="/welcome" element={<Component.Home />} />
					<Route path="/explore" element={<Component.Explore />} />
					<Route path="/explore/:id" element={<Component.Place />} />
					<Route path="*" element={<Component.Error code={404} />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
