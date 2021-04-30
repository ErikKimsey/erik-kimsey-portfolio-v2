import React from 'react';
import './scroll-arrow.scss';

export default function ScrollArrow() {
	let contI = document.querySelectorAll('.arrow');
	let cont = document.querySelector('.scroll-arrow-container');

	const stagger = (e) => {
		e.classList.add('animate-bounce');
	};

	const hideContainer = () => {
		if (cont !== null) cont.classList.add('hide');
	};

	contI.forEach((e, i) => {
		i += 1;
		setTimeout(() => {
			stagger(e);
		}, 200 * i);
	});

	setTimeout(() => {
		hideContainer();
	}, 5500);

	return (
		<div className="scroll-arrow-container">
			<i className="arrow-1 arrow" />
			<i className="arrow-2 arrow" />
			<i className="arrow-3 arrow" />
		</div>
	);
}
