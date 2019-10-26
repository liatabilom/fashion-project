import React, { Component } from 'react';

class Label extends Component {
	label = () => {
		if (this.props.badge === 0)
			return (
				<div>
					<img src="https://i.imgur.com/Q5qW8Tl.png" alt="Wool Worths" className="label" />
				</div>
			);
		if (this.props.badge === 1)
			return (
				<div>
					<img src="https://i.imgur.com/h7ZIPs0.png" alt="Zara" className="label" />
				</div>
			);
		if (this.props.badge === 2)
			return (
				<div>
					<img src="https://i.imgur.com/ntAPu0w.png" alt="Banana Republic" className="label" />
				</div>
			);
		if (this.props.badge === 3)
			return (
				<div>
					<img src="https://i.imgur.com/VFiBfbU.png" alt="Brooks Brothers" className="label" />
				</div>
			);
	};

	render() {
		return (
			<div>
				<span>{this.label()}</span>
			</div>
		);
	}
}

export default Label;
