import { Component } from "../components";

import "../../global/parallax-scroll";
import "./Home.scss";

import { data } from "./data";

// import PropTypes from "prop-types";

function Home() {
	return (
		<div className="main-container">
			<Component.ScrollContainer>
				{data.map((item) => {
					return <Component.ScrollItem key={item.id} title={item.title} description={item.description} />;
				})}
			</Component.ScrollContainer>
		</div>
	);
}

// Home.propTypes = {};

export default Home;
