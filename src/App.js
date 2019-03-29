import React, { Component } from "react";
import "./App.css";

import IsometricRect from "./components/isometric-rect";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <div id="main">
					<div id="msg">
						Recent
						<br />
						Work
					</div>
					<div id="btn"> Find more</div>
				</div> */}
				{/* This is for ,aking a side menu which scrolls on bottom of the screen */}
				{/* <header/>  */}

				<IsometricRect />
			</div>
		);
	}
}

export default App;
