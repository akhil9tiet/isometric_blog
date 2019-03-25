import React, { Component } from "react";
import "./isometric-rect.css";
import scene from "../posts/2019-02-23/scene.jpg";
import image2 from "../posts/2019-02-26/image2.jpg";
// import bear from "../posts/2019-02-27/bear.jpg";
// import halo from "../posts/2019-02-28/halo.jpg";
// import spark from "../posts/2019-03-01/spark.jpg";
// import img3 from "../posts/2019-03-02/img3.jpg";
// import img4 from "../posts/2019-03-03/img4.jpg";

/*Higher order component*/
const Rect = props => {
	console.log(props);
	return (
		// <div>
		// 	<h2>{props.b}</h2>
		// </div>
		<div className="grid-link" id={props.id}>
			<img src={props.img_src} alt={props.alt} />
		</div>
	);
};

class IsometricRect extends Component {
	render() {
		return (
			<div>
				<h2>thid is smerics</h2>
				<Rect id="d1" img_src={scene} alt="Tab" />
				<Rect id="d2" img_src={image2} alt="newtab" />
			</div>
		);
	}
}

// const IsometricRect = props => {
// 	console.log(props);

// 	return (
// 		<div>
// 			<h1>tiyy</h1>
// 			<Rect a={3} b={4} />
// 		</div>
// 	);
// };

// IsometricRect.defaultProps = {};
export default IsometricRect;
