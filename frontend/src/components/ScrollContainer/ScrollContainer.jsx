import { PropTypes } from "prop-types";

import "./ScrollContainer.scss";

function ScrollContainer({ children }) {
	return (
		<div>
			<div className="parallax-container">
				{/* First Welcome */}
				<section className="background" id="anim">
					<div className="content-wrapper">
						<div className="welcome-image">
							<section className="cd-intro">
								<div className="cd-intro-content mask">
									<h1 data-content="Incredible भारत">
										<span className="ti">Incredible भारत</span>
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

				{/* Second Welcome */}
				<section className="background">
					<div className="content-wrapper">
						<p className="content-title">
							Welcome <span className="level">to Magical</span> India
						</p>
						<p className="content-subtitle">Heritage | Our Pride</p>
					</div>
				</section>

				{/* Child Sections */}
				{children}
			</div>
		</div>
	);
}

ScrollContainer.propTypes = {
	children: PropTypes.node,
};

export default ScrollContainer;
