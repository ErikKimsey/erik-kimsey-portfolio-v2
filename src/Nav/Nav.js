import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Banner from '../Banner/Banner';
import resumePDF from '../assets/resume/erikkimsey_resume_softwareengineer.pdf';
const activeStyles = {
	color: '#AA5EF4'
};

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	handleToggle = () => {
		let navContainer = document.querySelector('.nav-container');
		navContainer.classList.toggle('active');
		this.setState({ isActive: !this.state.isActive });
	};

	handleHover = (e) => {
		let label = document.createElement('div');
		label.className = 'hover-label';
		label.innerHTML = e.target.title;
	};

	render() {
		return (
			<div>
				<Banner toggle={this.handleToggle} isActive={this.state.isActive} />
				<div className="nav-container">
					<ul className="nav-list">
						<li onClick={this.handleToggle}>
							<NavLink activeStyle={activeStyles} className="nav-link" exact to="/">
								<i className="fas fa-house-damage fa-1x" title="Landing" onMouseOver={this.handleHover} />
							</NavLink>
						</li>
						<li onClick={this.handleToggle}>
							<NavLink activeStyle={activeStyles} className="nav-link" to="/about">
								<i className="fas fa-user-astronaut fa-1x" title="About" onMouseOver={this.handleHover} />
								<div />
							</NavLink>
						</li>
						<li onClick={this.handleToggle}>
							<NavLink activeStyle={activeStyles} className="nav-link" to="/work">
								<i
									className="fas fa-code fa-1x"
									title="Work"
									onMouseOver={this.handleHover}
									onMouseLeave={this.handleLeave}
								/>
							</NavLink>
						</li>
						{/* <li onClick={this.handleToggle}>
							<a href="https://elated-hugle-66aa20.netlify.com/" target="_blank">
								<i
									className="fas fa-marker fa-1x"
									title="oddtreatment"
									onMouseOver={this.handleHover}
									onMouseLeave={this.handleLeave}
								/>
							</a>
						</li> */}
						<li onClick={this.handleToggle}>
							<NavLink activeStyle={activeStyles} title="Resume" className="nav-link" to={resumePDF} target="_blank">
								<i className="far fa-file-pdf fa-1x" />
							</NavLink>
						</li>
						<li onClick={this.handleToggle}>
							<NavLink activeStyle={activeStyles} className="nav-link" to="/contact">
								<i className="fas fa-phone fa-1x" title="Contact" onMouseOver={this.handleHover} />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Nav;
