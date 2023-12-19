import { Component } from "./components/components";
import { Route, Routes } from "react-router-dom";

import M from "materialize-css";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.title = "Out Heritage | Our भारत";
		M.AutoInit();
	}, []);

	return (
		<>
			<Component.Nav />
			<Routes>
				<Route path="/welcome/" element={<Component.Home />} />
				<Route path="/explore" element={<Component.Explore errorElement={<Component.Error code={500} />} />} />
				<Route path="*" element={<Component.Error code={404} />}></Route>
			</Routes>
		</>
	);
}

export default App;

