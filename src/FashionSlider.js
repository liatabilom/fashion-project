import React, { Component } from 'react';
import Slide from './components/Slide';
import RightArrow from './components/RightArrow';
import LeftArrow from './components/LeftArrow';
import Label from './Label';
import './FashionSlider.css';

class FashionSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: true,
			images: [
				{
					imageUrl: 'https://i.imgur.com/iRcnQT6.jpg',
					id: 'WoolWorths',
				},
				{
					imageUrl: 'https://i.imgur.com/JMScj7r.jpg',
					id: 'Zara',
				},
				{
					imageUrl: 'https://i.imgur.com/F5acUjB.jpg',
					id: 'BananaRepublic',
				},
				{
					imageUrl: 'https://i.imgur.com/FqlYSAx.jpg',
					id: 'BrooksBrothers',
				},
			],
			currentIndex: 0,
			translateValue: 0,
		};
	}

	goToPrevSlide = () => {
		if (this.state.currentIndex === 0) return;

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex - 1,
			translateValue: prevState.translateValue + this.slideWidth(),
		}));
	};

	goToNextSlide = () => {
		if (this.state.currentIndex === this.state.images.length - 1) {
			return this.setState({
				currentIndex: 0,
				translateValue: 0,
			});
		}

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -this.slideWidth(),
		}));
	};

	slideWidth = () => {
		return document.querySelector('.slide').clientWidth;
	};
	render() {
		return (
			<div className="slider">
				<Label id={this.state.images.id} />
				<div
					className="slider-wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: `transform ease-out 0.45s`,
					}}
				>
					{this.state.images.map(images => (
						<Slide image={images.imageUrl} key={images.id} />
					))}
				</div>
				<LeftArrow goToPrevSlide={this.goToPrevSlide} />
				<RightArrow goToNextSlide={this.goToNextSlide} />
			</div>
		);
	}
}

export default FashionSlider;
