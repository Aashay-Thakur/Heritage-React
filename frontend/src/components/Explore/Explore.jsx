import { useEffect, useState } from "react";
import axios from "axios";
import { Component } from "../components";

function Explore() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		document.title = "Our Heritage | Explore";
		axios
			.get("http://localhost:3000/api/all")
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
				return <Component.Error code={500} />;
			});
		setLoading(false);
	}, [data, setLoading]);

	if (loading) {
		return <h1>Loading...</h1>;
	} else {
		return <h1>Explore</h1>;
	}
}

export default Explore;
