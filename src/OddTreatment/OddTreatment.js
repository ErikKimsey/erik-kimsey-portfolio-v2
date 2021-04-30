import React, { Component } from 'react';
import './odd_treatment.scss';
import mapOfMeData from './ot_data';
import OT_Item from './components/ot_item';

export default class OddTreatment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		this.setState({ data: mapOfMeData });
	}
	render() {
		return (
			<div className="oddtreatment-container">
				{this.state.data == null && <div className="null-data">NOPE</div>}
				{this.state.data &&
					this.state.data.map((e, i) => {
						return <OT_Item data={e} />;
					})}
			</div>
		);
	}
}
