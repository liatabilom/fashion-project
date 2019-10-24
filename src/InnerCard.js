import React, { Component } from 'react';
import FashionSlider from './FashionSlider';
import './InnerCard.css';

class InnerCard extends Component {
	render() {
		return (
			<div className="container mt-2 innerSlider">
				<div className="card-body col-9 innerCard"></div>
				<div className="card-body col-3"></div>
			</div>
		);
	}
}

export default InnerCard;
