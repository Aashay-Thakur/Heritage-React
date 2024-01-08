import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Component } from "../components";
import axios from "axios";

import M from "materialize-css";
import "./Place.scss";

function Place() {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
				setError(err);
			});
		setLoading(false);
	}, [setLoading, id, setData, setError]);

	useEffect(() => {
		if (data.length !== 0) {
			document.title = `Our Heritage | ${data.name}`;
			M.Parallax.init(document.querySelectorAll(".parallax"), {});
		}
	}, [data]);

	if (error) {
		return <Component.Error code={error.response.status} />;
	}

	if (loading) {
		return <Component.Preloader />;
	}

	if (data.length !== 0) {
		let imageOrder = [0, 1, 2].sort(() => (Math.random() > 0.5 ? 1 : -1));
		return (
			<main>
				<div className="parallax-container">
					<div className="parallax p1">
						<img src={data.images[imageOrder[0]]} />
						<section className="background-img" id="anim">
							<div className="content-wrapper">
								<div className="welcome-image">
									<section className="cd-intro">
										<div className="cd-intro-content mask">
											<h1 data-content="Incredible भारत">
												<span>Incredible भारत</span>
											</h1>
											<div className="action-wrapper">
												<div className="cd-btn main-action left button">
													<a href="/explore">Explore Our Heritage</a>
												</div>
											</div>
										</div>
									</section>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className="section white">
					<div className="row container">
						<h2 className="header">About</h2>
						<p className="grey-text text-darken-3 lighten-3">{data.description}</p>
					</div>
				</div>
				<div className="parallax-container">
					<div className="parallax">
						<img src={data.images[imageOrder[1]]} />
					</div>
				</div>
				<div className="section white">
					<div className="row map-container">
						<Component.Map center={{ lat: data.geo._latitude, lng: data.geo._longitude }} />
					</div>
				</div>
				<div className="parallax-container">
					<div className="parallax">
						<img src={data.images[imageOrder[2]]} />
					</div>
				</div>
			</main>
		);
	}
}

export default Place;
