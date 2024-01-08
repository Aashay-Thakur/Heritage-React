import { useCallback, useState, memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import PropTypes from "prop-types";

const containerStyle = {
	width: "1600px",
	height: "50vh",
};

function Map({ center }) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
	});

	//eslint-disable-next-line no-unused-vars
	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

// props validation
Map.propTypes = {
	center: PropTypes.object.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Map);
