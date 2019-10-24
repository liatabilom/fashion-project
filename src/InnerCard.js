import React, { Component } from 'react';
import FashionSlider from './FashionSlider';
import Label from './Label';
import './InnerCard.css';

class InnerCard extends Component {
	render() {
		return (
			<div className="container mt-2 innerSlider">
				<div className="row innerCard">
					<div className="card-body col-6  border border-dark">
						<FashionSlider />
					</div>
					<div className="card card-body col-4 border border-dark"></div>
				</div>
			</div>
		);
	}
}

export default InnerCard;
