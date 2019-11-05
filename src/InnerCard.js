import React, { Component } from 'react';
import FashionSlider from './FashionSlider';
import './InnerCard.css';

class InnerCard extends Component {
	render() {
		return (
			<div className="container mt-2 innerSlider">
				<div className="row innerCard">
					<div className="card-body col-12">
						<FashionSlider />
					</div>
				</div>
			</div>
		);
	}
}

export default InnerCard;
