import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './lil_nav.scss';

export default class Lil_Nav extends Component {
	componentDidMount() {
		let items = document.querySelectorAll('.list-item');
		items.forEach((e, i) => {
			items[i].classList.add('item-animation-in');
		});
	}

	toggleMenu = () => {
		let menu = document.querySelector('.nav-list');
		let menuItems = document.querySelectorAll('.list-item');
		menu.classList.toggle('no-show');
		menuItems.forEach((e, i) => {
			menuItems[i].classList.toggle('item-animation-out');
			menuItems[i].classList.toggle('item-animation-in');
		});
	};

	render() {
		return (
			<div className="lil-nav-container">
				<div className="lil-nav-btn" onClick={this.toggleMenu}>
					<img src={require('../assets/droopy_e.png')} alt="droopy logo" />
				</div>
				<div className="nav-list">
					{this.props.data.map((e) => {
						return (
							<Link to={`/about/#${e}`} key={e} className="list-item" onClick={this.toggleMenu}>
								{e}
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}
