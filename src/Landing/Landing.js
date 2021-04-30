import React, { Component } from 'react';
import './landing.scss';
import { data, coreSkills } from './data';
import IconLinks from '../IconLinks/IconLinks';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0
		};
		this.landingBlurbs = React.createRef();
	}

	render() {
		return (
			<div className="landing-container" ref={(e) => (this.landingBlurbs = e)}>
				{data == null && <div className="null-data" />}
                <div className="skill-list-container">
                    <h2>core skillset</h2>
                    {
                        coreSkills && 
                            coreSkills.map((e) => {
                                return <li>{`${e}`}</li>
                            })
                    }
                    </div>
				{data &&
					data.map((e, i) => {
						i += 1;
						return (
							<div className={`self-blurb-container blurb-${i}`} key={e}>
								{`${e}`}
							</div>
						);
					})}
				<IconLinks />
			</div>
		);
	}
}

export default Landing;
