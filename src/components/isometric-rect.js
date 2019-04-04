import React, { Component } from "react";
import MasonryLayout from "react-masonry-layout";

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
			// top: props.top * 360,
			// right: props.right * 360
			flex: 1,
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "stretch",
			backgroundColor: "powderblue"
		}
	};
	return (
		<div className="grid-link" style={style.d}>
			{/* <div className="grid-link"> */}
			<img src={props.img_src} alt={props.alt} width={props.width} height={props.height} />
		</div>
	);
};

class IsometricRect extends Component {
	// state = {
	// 	perPage: 10,
	// 	items: Array(90).fill()
	// };

	// loadItems = () => {
	// 	this.setState({
	// 		items: this.state.items.concat(Array(this.state.perPage).fill())
	// 	});
	// };

	render() {
		return (
			// <div className="isolayer isolayer--scroll1 isolayer--shadow">
			<div>
				<Rect img_src={scene} alt="Tab" top={-0.09} right={-0.07} width={450} height={300} />
				<Rect img_src={image2} alt="newtab" top={0.31} right={0.6} width={450} height={300} />
				<Rect img_src={bear} alt="bear" top={0.7} right={0.18} width={450} height={300} />
				<Rect img_src={halo} alt="halo" top={0.54} right={0.41} width={450} height={300} />
				<Rect img_src={spark} alt="spark" top={0.18} right={-0.9} width={450} height={300} />
				<Rect img_src={img3} alt="img3" top={0.39} right={0.7} width={250} height={300} />
				<Rect img_src={img4} alt="img4" top={0.6} right={0.23} width={250} height={300} />
			</div>
		);
	}
}

export default IsometricRect;
