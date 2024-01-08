// import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";

function Card({ title, content, imageUrl, id }) {
	// const randomSize = Math.random() < 0.5 ? 3 : 4;
	const randomSize = 4;
	return (
		<div className={`col s12 m${randomSize} l${randomSize} tile`}>
			<div className="card hoverable large">
				<div className="card-image">
					<img className="materialboxed" src={imageUrl} />
					<span className="card-title">{title}</span>
				</div>
				<div className="card-content">
					<p>{content.slice(0, 150) + "..."}</p>
				</div>
				<div className="card-action">
					<Link to={`./${id}`}>See More</Link>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Card;
