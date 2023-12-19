import PropTypes from "prop-types";

function Error({ code }) {
	if (code === 404) {
		return (
			<div className="container">
				<h1>404</h1>
				<p>Page not found</p>
			</div>
		);
	} else {
		return (
			<div className="container">
				<h1>500</h1>
				<p>Internal Server Error</p>
			</div>
		);
	}
}

Error.propTypes = {
	code: PropTypes.number.isRequired,
};

export default Error;
