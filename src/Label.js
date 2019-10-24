import React, { Component } from 'react';

class Label extends Component {
	label = id => {
		if (this.props.id === 'WoolWorths')
			return (
				<div>
					<img src="https://i.imgur.com/Q5qW8Tl.png" />
				</div>
			);
		if (this.props.id === 'Zara')
			return (
				<div>
					<img src="https://i.imgur.com/h7ZIPs0.png" />
				</div>
			);
		if (this.props.id === 'BananaRepublic')
			return (
				<div>
					<img src="https://i.imgur.com/ntAPu0w.png" />
				</div>
			);
		if (this.props.id === 'BrooksBrothers')
			return (
				<div>
					<img src="https://i.imgur.com/VFiBfbU.png" />
				</div>
			);
	};

	render() {
		return <div>{this.label()}</div>;
	}
}

export default Label;
