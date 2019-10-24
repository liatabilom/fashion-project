import React, { Component } from 'react';
import FashionSlider from './FashionSlider';
import Label from './Label';
import './InnerCard.css';

class InnerCard extends Component {
	render() {
		return (
			<div className="container mt-2 innerSlider">
				<div className="row innerCard">
					<div className="card-body col-7">
						<FashionSlider />
					</div>
					<div className="card-body col-3 border border-dark">Text</div>
				</div>
			</div>
		);
	}
}

export default InnerCard;
