import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Prototype extends Component {
	prototype = () => {
		if (this.props.display === 0)
			return (
				<div>
					<img src="https://i.imgur.com/uwQcxQv.jpg" alt="Wool Worths" className="protoPhoto" />
				</div>
			);
		if (this.props.display === 1)
			return (
				<div>
					<img src="https://i.imgur.com/kPOpSPo.jpg" alt="Zara" className="protoPhoto" />
				</div>
			);
		if (this.props.display === 2)
			return (
				<div>
					<img src="https://i.imgur.com/uwB8YKB.jpg" alt="Banana Republic" className="protoPhoto" />
				</div>
			);
		if (this.props.display === 3)
			return (
				<div>
					<img src="https://i.imgur.com/EfDNl28.jpg" alt="Brooks Brothers" className="protoPhoto" />
				</div>
			);
	};

	handlePrototype = () => {
		return (
			<div
				className="prototype"
				style={{
					height: '300px',
					width: '350px',
					overflow: 'scroll',
				}}
			>
				<div>
					<Draggable axis="y" handle=".handle" grid={(25, 25)} allowAnyClick={true} disabled={true}>
						{this.prototype()}
					</Draggable>
				</div>
			</div>
		);
	};

	render() {
		return (
			<div>
				<span>{this.handlePrototype()}</span>
			</div>
		);
	}
}

export default Prototype;
