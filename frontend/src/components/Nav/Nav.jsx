import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper">
					<Link to="/welcome" className="brand-logo center">
						Heritage
					</Link>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li>
							<Link to="explore">Explore</Link>
						</li>
					</ul>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="https://spectacular-palmier-3d090e.netlify.app/list">Add a Place</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
