import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './icon-links.scss';

export default function IconLinks() {
	return (
		<div className="icon-links-container">
			<a href="https://www.linkedin.com/in/erik-kimsey-7257a4170" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-linkedin fa-3x" />
			</a>
			<a href="https://github.com/ErikKimsey" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github fa-3x" />
			</a>
		</div>
	);
}
