import React, { Component } from "react";
// import PropTypes from "prop-types";

// import "./isometric-rect.css";
import scene from "../posts/2019-02-23/scene.jpg";
import image2 from "../posts/2019-02-26/image2.jpg";
import bear from "../posts/2019-02-27/bear.jpg";
import halo from "../posts/2019-02-28/halo.jpg";
import spark from "../posts/2019-03-01/spark.jpg";
import img3 from "../posts/2019-03-02/img3.jpg";
import img4 from "../posts/2019-03-03/img4.jpg";

/*Higher order component*/
const Rect = props => {
	console.log(props);
	var style = {
		d: {
			top: props.top * 360,
			right: props.right * 360
		}
	};
	return (
		// <div className="grid-link" style={style.d}>
		<div className="grid-link">
			<img src={props.img_src} alt={props.alt} />
		</div>
	);
};

class IsometricRect extends Component {
	render() {
		return (
			// <div className="isolayer isolayer--scroll1 isolayer--shadow">
			<div>
				<Rect img_src={scene} alt="Tab" top={-0.09} right={-0.07} />
				<Rect img_src={image2} alt="newtab" top={0.31} right={0.6} />
				<Rect img_src={bear} alt="bear" top={0.7} right={0.18} />
				<Rect img_src={halo} alt="halo" top={0.54} right={0.41} />
				<Rect img_src={spark} alt="spark" top={0.18} right={-0.9} />
				<Rect img_src={img3} alt="img3" top={0.39} right={0.7} />
				<Rect img_src={img4} alt="img4" top={0.6} right={0.23} />
			</div>
		);
	}
}

export default IsometricRect;
