import { Component } from "../components";

import "./Home.scss";
import "./parallax-scroll";

import { data } from "./data";

// import PropTypes from "prop-types";

function Home() {
	return (
		<Component.ScrollContainer>
			{data.map((item) => {
				return <Component.ScrollItem key={item.id} title={item.title} description={item.description} />;
			})}
		</Component.ScrollContainer>
	);
}

// Home.propTypes = {};

export default Home;
