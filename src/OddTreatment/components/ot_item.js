import React from 'react';
import './ot-item.scss';

export default function OT_Item(props) {
	console.log(props);

	const itemBackgroundStyles = {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	};
	return (
		<div
			className="item-container"
			style={{
				backgroundImage: `url(${props.data.imgs[0]})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<h4 className="item-title">{props.data.project}</h4>
			<div className="tech-stack">{props.data.stack}</div>
			<div className="item-description">{props.data.description}</div>
		</div>
	);
}
