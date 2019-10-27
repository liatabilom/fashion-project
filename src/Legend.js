import React, { Component } from 'react';

class Legend extends Component {
	legend = () => {
		if (this.props.text === 0)
			return (
				<div>
					<img src="https://i.imgur.com/PMD9tVd.png" alt="Wool Worths" className="legend" />
				</div>
			);
		if (this.props.text === 1)
			return (
				<div>
					<img src="https://i.imgur.com/DJy86YM.png" alt="Zara" className="legend" />
				</div>
			);
		if (this.props.text === 2)
			return (
				<div>
					<img src="https://i.imgur.com/bdmktbm.png" alt="Banana Republic" className="legend" />
				</div>
			);
		if (this.props.text === 3)
			return (
				<div>
					<img src="https://i.imgur.com/C8EV0AK.png" alt="Brooks Brothers" className="legend" />
				</div>
			);
	};

	render() {
		return (
			<div>
				<span>{this.legend()}</span>
			</div>
		);
	}
}

export default Legend;
