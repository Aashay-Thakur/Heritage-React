import PropTypes from "prop-types";

function ScrollItem({ title, description }) {
	return (
		<section className="background">
			<div className="content-wrapper">
				<div className="intro-text center">
					<div className="row title">
						<h5>{title}</h5>
					</div>
					<div className="row">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

ScrollItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default ScrollItem;
