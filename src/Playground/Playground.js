import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './playground.scss';
import { draw } from './playings/play';
import { D2, PLAYGROUND_DATA } from './data';

export default class Playground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			containerDimens: {
				h: null,
				w: null
			}
		};
		this.container = React.createRef();
	}

	componentDidMount() {
		let data = null;
		let dimensCopy = Object.assign({}, this.state.containerDimens);
		dimensCopy.w = this.container.clientWidth;
		dimensCopy.h = window.innerHeight - 320;
		this.setState({
			containerDimens: dimensCopy,
			data: PLAYGROUND_DATA
		});
	}

	componentDidUpdate(prevProps, prevState) {
		this.drawGraph(PLAYGROUND_DATA, this.state.containerDimens);
	}

	drawGraph = (data, dimens) => {
		draw(data, this.container, dimens);
	};

	render() {
		return (
			<div className="playground-container" ref={(container) => (this.container = container)}>
				<svg />
			</div>
		);
	}
}
