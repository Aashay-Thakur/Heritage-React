import { PropTypes } from "prop-types";

function ScrollContainer({ children }) {
	return (
		<div>
			{" "}
			<div className="parallax-container">
				{/* First Welcome */}
				<section className="background" id="anim">
					<div className="content-wrapper">
						<div className="welcome-image">
							<section className="cd-intro">
								<div className="cd-intro-content mask">
									<h1 data-content="Incredible भारत">
										<span>Incredible भारत</span>
									</h1>
									<div className="action-wrapper">
										<div className="cd-btn main-action left">
											<a href="/explore">Get started</a>
										</div>
										<div className="cd-btn">
											<a>Learn More</a>
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
							Welcome <span className="level">in Magical</span> India
						</p>
						<p className="content-subtitle">Scroll down and up to see the effect!</p>
					</div>
				</section>

				{/* Child Sections */}
				{children}

				{/* Carousel Section  */}
				<section className="background">
					<div className="content-wrapper"></div>
				</section>
			</div>
		</div>
	);
}

ScrollContainer.propTypes = {
	children: PropTypes.node,
};

export default ScrollContainer;
