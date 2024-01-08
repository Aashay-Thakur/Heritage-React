import { useEffect, useState } from "react";
import axios from "axios";
import { Component } from "../components";

import M from "materialize-css";
import "./Explore.scss";

function Explore() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		document.title = "Our Heritage | Explore";
		M.AutoInit();
		axios
			.get("http://localhost:3000/api/all")
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
				setError(err);
			});
		setLoading(false);
	}, [setLoading]);

	if (error) {
		return <Component.Error code={error.response.status} />;
	}

	if (loading) {
		return <Component.Preloader />;
	}

	return (
		<div className="card-container">
			<div className="row">
				{data.map((item) => {
					return (
						<Component.Card
							key={item.index}
							title={item.name}
							content={item.description}
							imageUrl={item.images[Math.floor(Math.random() * item.images.length)]}
							id={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Explore;
